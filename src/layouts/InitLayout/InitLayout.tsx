import { useProfileQuery } from "@/api/auth";
import { useUserStore } from "@/store/user";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export const InitLayout = () => {
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

  return <Outlet />;
};
