import imageLogo from "@/assets/images/logo.webp";
import { LINK_TEMPLATES } from "@/common/constants";
import IconBell from "@/common/icons/IconBell";
import { BaseButton } from "@/components/ui/buttons/BaseButton";
import { BurgerMenu } from "@/layouts/BaseLayout/components/BurgerMenu";
import { Account } from "@/layouts/BaseLayout/components/Header/components/Account";
import { useUserStore } from "@/store/user";
import { LittleMobileOff, MobileOff, MobileOn } from "@/utils/responsive";
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
  StyledNotify,
  StyledWrapper,
} from "./styles";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const isAuth = useUserStore((state) => state.isAuth);
  const [isOpen, setIsOpen] = useState(false);

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
        <MobileOff>
          <StyledList>{renderNav()}</StyledList>
        </MobileOff>
        <StyledAction>
          <LittleMobileOff>
            <LanguageSelect />
          </LittleMobileOff>
          {isAuth ? (
            <>
              <StyledNotify to={LINK_TEMPLATES.MESSAGES()}>
                <IconBell />
              </StyledNotify>
              <Account />
            </>
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
        <MobileOn>
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </MobileOn>
      </StyledContainer>
    </StyledWrapper>
  );
};
