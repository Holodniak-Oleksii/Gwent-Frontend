import API from "@/api";
import {
  ENDPOINTS,
  IErrorResponse,
  IGetPlayersResponse,
  QueryKey,
} from "@/common/types";
import { useFilterStore } from "@/store/filters";
import { useUserStore } from "@/store/user";
import { useQuery } from "@tanstack/react-query";

export const useGetPlayersQuery = () => {
  const user = useUserStore((state) => state.user);
  const params = useFilterStore((state) => state.filter.PLAYERS);

  return useQuery<IGetPlayersResponse, IErrorResponse>({
    queryKey: [QueryKey.PLAYERS, user?.nickname, JSON.stringify(params)],
    placeholderData: (previousData) => previousData,
    queryFn: async () => {
      const { data } = await API.get<IGetPlayersResponse>(ENDPOINTS.PLAYERS, {
        params,
      });
      return data;
    },
  });
};
