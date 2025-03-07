import { LINK_TEMPLATES } from "@/common/constants";
import { useAuthStore } from "@/store/auth";
import { useUserStore } from "@/store/user";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "./components/Header";
import { StyledMain } from "./styles";

export const BaseLayout = () => {
  const isAuth = useUserStore((state) => state.isAuth);
  const user = useUserStore((state) => state.user);

  const logout = useUserStore((state) => state.logout);
  const navigate = useNavigate();
  const removeCredentials = useAuthStore((state) => state.removeCredentials);

  const onLogOut = () => {
    navigate(LINK_TEMPLATES.HOME());
    logout();
    removeCredentials();
  };

  return (
    <StyledMain>
      <Header />
      <Outlet />
    </StyledMain>
  );
};
