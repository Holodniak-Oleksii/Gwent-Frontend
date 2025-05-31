import { useGetProfileQuery } from "@/api/auth";
import { initializeNotificationManager } from "@/api/ws/notification";
import { Loader } from "@/components/shared/Loader";
import { useUserStore } from "@/store/user";
import { FC, PropsWithChildren, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const InitLayout: FC<PropsWithChildren> = ({ children }) => {
  const { data, isLoading } = useGetProfileQuery();
  const setUser = useUserStore((state) => state.setUser);
  const { t } = useTranslation();

  useEffect(() => {
    if (data?.user) {
      setUser(data?.user);
      initializeNotificationManager(data.user.nickname, t);
    }
  }, [data?.user, setUser, t]);

  if (isLoading) {
    return <Loader />;
  }

  return children;
};
