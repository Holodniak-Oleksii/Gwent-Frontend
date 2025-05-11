import imageLogo from "@/assets/images/logo.webp";
import { LINK_TEMPLATES } from "@/common/constants";
import { BaseButton } from "@/components/ui/buttons/BaseButton";
import i18n from "@/i18n";
import { Account } from "@/layouts/BaseLayout/components/Header/components/Account";
import { useUserStore } from "@/store/user";
import { useEffect, useState } from "react";
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
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const isAuth = useUserStore((state) => state.isAuth);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos >= 80) {
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  const renderNav = () =>
    getNavigation(i18n.language, isAuth).map((n, i) => (
      <StyledLink key={i} to={n.path} $isActive={pathname.includes(n.path)}>
        {t(n.name)}
      </StyledLink>
    ));

  return (
    <StyledWrapper $isVisible={visible}>
      <StyledContainer>
        <StyledLogo to={LINK_TEMPLATES.HOME()}>
          <img src={imageLogo} alt="logo" />
        </StyledLogo>
        <StyledList>{renderNav()}</StyledList>
        <StyledAction>
          <LanguageSelect />
          {isAuth ? (
            <Account />
          ) : (
            <>
              <BaseButton onClick={() => navigate(LINK_TEMPLATES.LOGIN())}>
                {t("button.login")}
              </BaseButton>
              <BaseButton
                variant="outline"
                onClick={() => navigate(LINK_TEMPLATES.REGISTRATION())}
              >
                {t("button.registration")}
              </BaseButton>
            </>
          )}
        </StyledAction>
      </StyledContainer>
    </StyledWrapper>
  );
};
