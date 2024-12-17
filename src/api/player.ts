import API from "@/api";
import {
  ENDPOINTS,
  IErrorResponse,
  IGetPlayersResponse,
  QueryKey,
} from "@/common/types";
import { useQuery } from "@tanstack/react-query";

export const useGetPlayersQuery = () => {
  return useQuery<IGetPlayersResponse, IErrorResponse>({
    queryKey: [QueryKey.PLAYERS],
    queryFn: async () => {
      const { data } = await API.get<IGetPlayersResponse>(ENDPOINTS.PLAYERS);
      return data;
    },
  });
};
