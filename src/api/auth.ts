import API from "@/api";
import { LINK_TEMPLATES } from "@/common/constants";
import { useNotifyMutation } from "@/common/hooks/useNotifyMutation";
import {
  ENDPOINTS,
  IAuthResponse,
  IGetProfileResponse,
  QueryKey,
} from "@/common/types";
import { ILoginFormFields } from "@/features/auth/Login/types";
import { IRegistrationFormFields } from "@/features/auth/Registration/types";
import { useAuthStore } from "@/store/auth";
import { useUserStore } from "@/store/user";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

export const useLoginMutation = () => {
  const setCredentials = useAuthStore((state) => state.setCredentials);
  const setUser = useUserStore((state) => state.setUser);
  const navigation = useNavigate();

  return useNotifyMutation({
    mutationFn: (data: ILoginFormFields) => {
      return API.post(ENDPOINTS.LOGIN, data);
    },
    onSuccess: (data: AxiosResponse<IAuthResponse>) => {
      setCredentials(
        data.data.tokens.refreshToken,
        data.data.tokens.accessToken
      );
      setUser(data.data.user);
      navigation(LINK_TEMPLATES.PROFILE());
    },
  });
};

export const useRegistrationMutation = () => {
  const setCredentials = useAuthStore((state) => state.setCredentials);
  const setUser = useUserStore((state) => state.setUser);
  const navigation = useNavigate();

  return useNotifyMutation({
    mutationFn: (data: IRegistrationFormFields) => {
      return API.post(ENDPOINTS.REGISTRATION, data);
    },
    onSuccess: (data: AxiosResponse<IAuthResponse>) => {
      setCredentials(
        data.data.tokens.refreshToken,
        data.data.tokens.accessToken
      );
      setUser(data.data.user);
      navigation(LINK_TEMPLATES.PROFILE());
    },
  });
};

export const useGetProfileQuery = () => {
  return useQuery<IGetProfileResponse>({
    queryKey: [QueryKey.PROFILE],
    queryFn: async () => {
      const { data } = await API.get<IGetProfileResponse>(ENDPOINTS.PROFILE);
      return data;
    },
  });
};
