import API from "@/api";
import {
  ENDPOINTS,
  IErrorResponse,
  IGetCardsResponse,
  QueryKey,
} from "@/common/types";
import { useQuery } from "@tanstack/react-query";

export const useGetMyCardsQuery = () => {
  return useQuery<IGetCardsResponse, IErrorResponse>({
    queryKey: [QueryKey.MY_CARDS],
    queryFn: async () => {
      const { data } = await API.get<IGetCardsResponse>(ENDPOINTS.MY_CARDS);
      return data;
    },
  });
};
