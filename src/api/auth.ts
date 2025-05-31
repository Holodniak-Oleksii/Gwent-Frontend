import API from "@/api";
import { initializeNotificationManager } from "@/api/ws/notification";
import { LINK_TEMPLATES } from "@/common/constants";
import { useNotifyMutation } from "@/common/hooks/useNotifyMutation";
import {
  ENDPOINTS,
  IAuthResponse,
  IAvatarResponse,
  IGetPlayerResponse,
  IGetProfileResponse,
  QueryKey,
} from "@/common/types";
import { ILoginFormFields } from "@/features/auth/Login/types";
import { IRegistrationFormFields } from "@/features/auth/Registration/types";
import { useAuthStore } from "@/store/auth";
import { useUserStore } from "@/store/user";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const useLoginMutation = () => {
  const setCredentials = useAuthStore((state) => state.setCredentials);
  const setUser = useUserStore((state) => state.setUser);
  const navigation = useNavigate();
  const { t } = useTranslation();
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
      navigation(LINK_TEMPLATES.PROFILE(data.data.user.nickname));
      initializeNotificationManager(data.data.user.nickname, t);
    },
  });
};

export const useRegistrationMutation = () => {
  const setCredentials = useAuthStore((state) => state.setCredentials);
  const setUser = useUserStore((state) => state.setUser);
  const navigation = useNavigate();
  const { t } = useTranslation();

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
      navigation(LINK_TEMPLATES.PROFILE(data.data.user.nickname));
      initializeNotificationManager(data.data.user.nickname, t);
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

export const useGetProfileByNicknameQuery = (nickname: string) => {
  return useQuery<IGetPlayerResponse>({
    queryKey: [QueryKey.PLAYER, nickname],
    queryFn: async () => {
      const { data } = await API.get<IGetPlayerResponse>(
        ENDPOINTS.PLAYER.replace("_nickname_", nickname)
      );
      return data;
    },
  });
};

export const useMutationUploadAvatar = () => {
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);

  return useMutation({
    mutationFn: (avatar: File) => {
      const form = new FormData();
      form.append("avatar", avatar);
      return API.post(ENDPOINTS.AVATAR, form);
    },
    onSuccess: (data: AxiosResponse<IAvatarResponse>) => {
      if (data.data.avatar && user) {
        setUser({ ...user, avatar: data.data.avatar });
      }
    },
  });
};
