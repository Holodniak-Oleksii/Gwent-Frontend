import API from "@/api";
import {
  ENDPOINTS,
  IErrorResponse,
  IGetCardIDsResponse,
  IGetCardsResponse,
  QueryKey,
} from "@/common/types";
import { useUserStore } from "@/store/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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
  return useQuery<IGetCardsResponse, IErrorResponse>({
    queryKey: [QueryKey.ALL_CARDS],
    queryFn: async () => {
      const { data } = await API.get<IGetCardsResponse>(ENDPOINTS.ALL_CARDS);
      return data;
    },
  });
};

export const useBuyCardMutation = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation<IGetCardIDsResponse, IErrorResponse>({
    mutationFn: async () => {
      const { data } = await API.post<IGetCardIDsResponse>(
        ENDPOINTS.BUY_CARDS,
        { id }
      );
      return data;
    },
    onSuccess: (data) => {
      if (data?.cards) {
        const { user } = useUserStore.getState();
        if (user) {
          useUserStore.setState({
            user: { ...user, cards: data.cards },
          });
        }
      }

      queryClient.refetchQueries({ queryKey: [QueryKey.MY_CARDS] });
    },
  });
};
