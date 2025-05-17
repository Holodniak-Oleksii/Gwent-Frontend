import API from "@/api";
import {
  ENDPOINTS,
  IErrorResponse,
  IGetPlayersResponse,
  QueryKey,
} from "@/common/types";
import { useUserStore } from "@/store/user";
import { useQuery } from "@tanstack/react-query";

export const useGetPlayersQuery = () => {
  const user = useUserStore((state) => state.user);
  return useQuery<IGetPlayersResponse, IErrorResponse>({
    queryKey: [QueryKey.PLAYERS, user?.nickname],
    queryFn: async () => {
      const { data } = await API.get<IGetPlayersResponse>(ENDPOINTS.PLAYERS);
      return data;
    },
  });
};
