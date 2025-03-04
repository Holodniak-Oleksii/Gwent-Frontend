import imageLogo from "@/assets/images/logo.webp";
import { LINK_TEMPLATES } from "@/common/constants";
import { BaseButton } from "@/components/ui/buttons/BaseButton";
import { navigation } from "@/layouts/BaseLayout/components/data";
import {
  StyledAction,
  StyledContainer,
  StyledLink,
  StyledList,
  StyledLogo,
  StyledWrapper,
} from "./styles";

export const Header = () => {
  const renderNav = () =>
    navigation.map((n, i) => (
      <StyledLink key={i} to={n.path}>
        {n.name}
      </StyledLink>
    ));
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledLogo to={LINK_TEMPLATES.HOME}>
          <img src={imageLogo} alt="logo" />
        </StyledLogo>
        <StyledList>{renderNav()}</StyledList>
        <StyledAction>
          <BaseButton>Login</BaseButton>
          <BaseButton variant="outline">Registration</BaseButton>
        </StyledAction>
      </StyledContainer>
    </StyledWrapper>
  );
};
