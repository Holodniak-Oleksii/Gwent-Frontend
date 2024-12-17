import { LINK_TEMPLATES } from "@/common/constants";
import { useAuthStore } from "@/store/auth";
import { useUserStore } from "@/store/user";
import { Outlet, useNavigate } from "react-router-dom";
import { StyledButton, StyledHeader, StyledLink } from "./styles";

export const BaseLayout = () => {
  const isAuth = useUserStore((state) => state.isAuth);
  const logout = useUserStore((state) => state.logout);
  const navigate = useNavigate();
  const removeCredentials = useAuthStore((state) => state.removeCredentials);

  const onLogOut = () => {
    navigate(LINK_TEMPLATES.HOME);
    logout();
    removeCredentials();
  };

  return (
    <>
      <StyledHeader>
        <StyledLink to={LINK_TEMPLATES.HOME}>Home</StyledLink>
        {isAuth ? (
          <>
            <StyledLink to={LINK_TEMPLATES.PROFILE}>Profile</StyledLink>
            <StyledLink to={LINK_TEMPLATES.PLAYERS}>Players</StyledLink>
            <StyledButton onClick={onLogOut}>log out</StyledButton>
          </>
        ) : (
          <>
            <StyledLink to={LINK_TEMPLATES.LOGIN}>login</StyledLink>
            <StyledLink to={LINK_TEMPLATES.REGISTRATION}>
              Registration
            </StyledLink>
          </>
        )}
      </StyledHeader>
      <Outlet />
    </>
  );
};
