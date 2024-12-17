import { useGetProfileQuery } from "@/api/auth";
import { initializeNotificationManager } from "@/api/ws/notification";
import { useUserStore } from "@/store/user";
import { FC, PropsWithChildren, useEffect } from "react";

export const InitLayout: FC<PropsWithChildren> = ({ children }) => {
  const { data, isLoading } = useGetProfileQuery();
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    if (data?.user) {
      setUser(data?.user);
      initializeNotificationManager(data.user.nickname);
    }
  }, [data?.user, setUser]);

  if (isLoading) {
    return <>Loading...</>;
  }

  return children;
};
