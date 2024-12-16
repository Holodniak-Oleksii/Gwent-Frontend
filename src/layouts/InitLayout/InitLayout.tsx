import { useProfileQuery } from "@/api/auth";
import { useUserStore } from "@/store/user";
import { FC, PropsWithChildren, useEffect } from "react";

export const InitLayout: FC<PropsWithChildren> = ({ children }) => {
  const { data, isLoading } = useProfileQuery();
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    if (data?.user) {
      setUser(data?.user);
    }
  }, [data?.user, setUser]);

  if (isLoading) {
    return <>Loading...</>;
  }

  return children;
};
