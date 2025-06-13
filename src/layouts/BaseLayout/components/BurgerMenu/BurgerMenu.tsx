import { getNavigation } from "@/layouts/BaseLayout/components/data";
import { social } from "@/layouts/BaseLayout/components/Footer/data";
import { useUserStore } from "@/store/user";
import { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Transition } from "react-transition-group";
import {
  SocialList,
  StyledBurger,
  StyledButton,
  StyledCircleOverlay,
  StyledContainer,
  StyledLink,
  StyledList,
  StyledScroll,
  StyledWrapper,
} from "./styles";
interface IBurgerMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const BurgerMenu: FC<IBurgerMenuProps> = ({ isOpen, setIsOpen }) => {
  const { pathname } = useLocation();
  const contentRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation();
  const isAuth = useUserStore((state) => state.isAuth);

  const onClose = () => {
    setIsOpen(false);
  };

  const renderNavigations = () =>
    getNavigation(i18n.language, isAuth).map((n, i) => (
      <StyledLink
        key={i}
        to={n.path}
        $isActive={pathname.includes(n.path)}
        onClick={onClose}
      >
        {t(n.name)}
      </StyledLink>
    ));

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  return (
    <StyledWrapper>
      <StyledBurger onClick={() => setIsOpen((prev) => !prev)}>
        <StyledButton type="button" $isActive={isOpen}>
          <span></span>
          <span></span>
          <span></span>
        </StyledButton>
      </StyledBurger>
      <Transition
        nodeRef={contentRef}
        in={isOpen}
        timeout={500}
        unmountOnExit
        mountOnEnter
      >
        {(state) => (
          <>
            <StyledCircleOverlay ref={contentRef} $transitionState={state} />
            <StyledContainer $transitionState={state}>
              <StyledScroll>
                <StyledList>{renderNavigations()}</StyledList>
                <SocialList>
                  {social.map((Icon) => (
                    <Icon />
                  ))}
                </SocialList>
              </StyledScroll>
            </StyledContainer>
          </>
        )}
      </Transition>
    </StyledWrapper>
  );
};
