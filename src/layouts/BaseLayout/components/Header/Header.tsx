import imageLogo from "@/assets/images/logo.webp";
import { LINK_TEMPLATES } from "@/common/constants";
import { BaseButton } from "@/components/ui/buttons/BaseButton";
import { navigation } from "@/layouts/BaseLayout/components/data";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { LanguageSelect } from "./components/LanguageSelect";
import {
  StyledAction,
  StyledContainer,
  StyledLink,
  StyledList,
  StyledLogo,
  StyledWrapper,
} from "./styles";

export const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const renderNav = () =>
    navigation.map((n, i) => (
      <StyledLink key={i} to={n.path}>
        {t(n.name)}
      </StyledLink>
    ));

  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledLogo to={LINK_TEMPLATES.HOME()}>
          <img src={imageLogo} alt="logo" />
        </StyledLogo>
        <StyledList>{renderNav()}</StyledList>
        <StyledAction>
          <LanguageSelect />
          <BaseButton onClick={() => navigate(LINK_TEMPLATES.LOGIN())}>
            {t("button.login")}
          </BaseButton>
          <BaseButton
            variant="outline"
            onClick={() => navigate(LINK_TEMPLATES.REGISTRATION())}
          >
            {t("button.registration")}
          </BaseButton>
        </StyledAction>
      </StyledContainer>
    </StyledWrapper>
  );
};
