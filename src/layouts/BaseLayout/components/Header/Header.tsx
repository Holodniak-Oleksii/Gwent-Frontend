import imageLogo from "@/assets/images/logo.webp";
import { LINK_TEMPLATES } from "@/common/constants";
import { BaseButton } from "@/components/ui/buttons/BaseButton";
import i18n from "@/i18n";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { getNavigation } from "../data";
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
  const { pathname } = useLocation();
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest < scrollY.getPrevious()!);
  });

  const renderNav = () =>
    getNavigation(i18n.language).map((n, i) => (
      <StyledLink key={i} to={n.path} $isActive={pathname.includes(n.path)}>
        {t(n.name)}
      </StyledLink>
    ));

  return (
    <StyledWrapper
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
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
