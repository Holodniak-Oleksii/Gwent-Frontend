import API from "@/api";
import { useNotifyMutation } from "@/common/hooks/useNotifyMutation";
import {
  ENDPOINTS,
  IErrorResponse,
  IGetCardIDsResponse,
  IGetCardsResponse,
  QueryKey,
} from "@/common/types";
import { useFilterStore } from "@/store/filters";
import { useUserStore } from "@/store/user";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetMyCardsQuery = () => {
  return useQuery<IGetCardsResponse, IErrorResponse>({
    queryKey: [QueryKey.MY_CARDS],
    queryFn: async () => {
      const { data } = await API.get<IGetCardsResponse>(ENDPOINTS.MY_CARDS);
      return data;
    },
  });
};

export const useGetCardsQuery = () => {
  const params = useFilterStore((state) => state.filter.CARDS);

  return useQuery<IGetCardsResponse, IErrorResponse>({
    queryKey: [QueryKey.ALL_CARDS, JSON.stringify(params)],
    placeholderData: (previousData) => previousData,
    queryFn: async () => {
      const { data } = await API.get<IGetCardsResponse>(ENDPOINTS.ALL_CARDS, {
        params,
      });
      return data;
    },
  });
};

export const useBuyCardMutation = (id: string) => {
  const queryClient = useQueryClient();

  return useNotifyMutation<IGetCardIDsResponse, IErrorResponse>({
    mutationFn: async () => {
      const { data } = await API.post<IGetCardIDsResponse>(
        ENDPOINTS.BUY_CARDS,
        { id }
      );
      return data;
    },
    onSuccess: (data) => {
      if (data?.user) {
        const { user } = useUserStore.getState();
        if (user) {
          useUserStore.setState({
            user: data?.user,
          });
        }
      }
      queryClient.refetchQueries({ queryKey: [QueryKey.MY_CARDS] });
    },
  });
};
