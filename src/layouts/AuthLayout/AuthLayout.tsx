import { Outlet } from "react-router-dom";
import { StyledFormContainer } from "./styles";

export const AuthLayout = () => {
  return (
    <StyledFormContainer>
      <Outlet />
    </StyledFormContainer>
  );
};
