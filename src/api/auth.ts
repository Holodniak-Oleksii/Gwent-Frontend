import API from "@/api";
import {
  ENDPOINTS,
  IGetProfileResponse,
  IRegistrationResponse,
  QueryKey,
} from "@/common/types";
import { IRegistrationFormFields } from "@/features/auth/Registration/types";
import { useAuthStore } from "@/store/auth";
import { useUserStore } from "@/store/user";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useRegistrationMutation = () => {
  const setCredentials = useAuthStore((state) => state.setCredentials);
  const setUser = useUserStore((state) => state.setUser);
  return useMutation({
    mutationFn: (data: IRegistrationFormFields) => {
      return API.post(ENDPOINTS.REGISTRATION, data);
    },
    onSuccess: (data: AxiosResponse<IRegistrationResponse>) => {
      setCredentials(
        data.data.tokens.refreshToken,
        data.data.tokens.accessToken
      );
      setUser(data.data.user);
    },
  });
};

export const useProfileQuery = () => {
  return useQuery<IGetProfileResponse>({
    queryKey: [QueryKey.PROFILE],
    queryFn: async () => {
      const { data } = await API.get<IGetProfileResponse>(ENDPOINTS.PROFILE);
      return data;
    },
  });
};
