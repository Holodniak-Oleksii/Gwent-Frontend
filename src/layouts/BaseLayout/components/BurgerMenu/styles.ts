import { IActiveble, ITransitionsProps } from "@/common/types";

import { Link } from "react-router-dom";
import { TransitionStatus } from "react-transition-group";
import styled, { css, RuleSet } from "styled-components";

export const opacityAnimation = (
  delay = 250,
  speed = 150
): Record<TransitionStatus, RuleSet> => ({
  entering: css`
    opacity: 1;
    transition: opacity ${speed}ms;
    transition-delay: ${delay}ms;
  `,
  entered: css`
    opacity: 1;
    transition: opacity ${speed}ms;
  `,
  exiting: css`
    opacity: 0;
    transition: opacity ${speed}ms;
  `,
  exited: css`
    opacity: 0;
    transition: opacity ${speed}ms;
  `,
  unmounted: css`
    opacity: 0;
    transition: opacity ${speed}ms;
  `,
});

export const scaleAnimation: Record<TransitionStatus, RuleSet> = {
  entering: css`
    width: 500vh;
    height: 500vh;
    transition: all 500ms;
  `,
  entered: css`
    width: 500vh;
    height: 500vh;
    transition: all 500ms;
  `,
  exiting: css`
    width: 0;
    height: 0;
    transition: all 500ms;
  `,
  exited: css`
    width: 0;
    height: 0;
    transition: all 500ms;
  `,
  unmounted: css`
    width: 0;
    height: 0;
    transition: all 500ms;
  `,
};

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  position: relative;
  z-index: 100;
`;

export const StyledBurger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  position: relative;
  z-index: 1;
`;

export const StyledCircleOverlay = styled.div<ITransitionsProps>`
  width: 0;
  height: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease-in-out;
  ${({ $transitionState, theme }) => css`
    ${scaleAnimation[$transitionState]};
    background: ${theme.colors.primary};
    border: 1px solid ${theme.colors.secondary};
  `}
`;

export const StyledButton = styled.button<IActiveble>`
  width: 24px;
  height: 18px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.5s;
  span {
    background: ${({ theme }) => theme.colors.text};
    width: 100%;
    height: 2px;
    border-radius: 100px;
    transition: 0.5s ease;
    :nth-child(3) {
      width: 60%;
    }
  }
  @media screen and (max-width: 767px) {
    ${({ $isActive }) =>
      $isActive &&
      css`
        span {
          background: ${({ theme }) => theme.colors.text};
        }
        span:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }

        span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
          width: 100%;
        }

        span:nth-child(2) {
          transform: translateX(-20px);
          opacity: 0;
        }
      `}
  }
`;

export const StyledContainer = styled.div<ITransitionsProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100svh;
  display: flex;
  padding: 70px 32px 0 32px;
  ${({ $transitionState }) => opacityAnimation(0, 500)[$transitionState]}
`;

export const StyledScroll = styled.div`
  width: 100%;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: auto 0;
`;

export const StyledLink = styled(Link)<IActiveble>`
  white-space: nowrap;
  padding: 4px 40px;
  min-height: 40px;
  position: relative;
  ${({ theme, $isActive }) => css`
    font-size: 26px;
    line-height: 1.2;
    color: ${theme.colors.text};
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transition: all 0.2s linear;
      top: 50%;
      z-index: -1;
      border-radius: 6px;
      opacity: 0;
      transform: translate(-50%, -50%);
      height: calc(100% + 8px);
      width: calc(100% + 32px);
      background: ${theme.colors.primary};
    }
    ${$isActive &&
    css`
      &::after {
        opacity: 1;
      }
    `}
  `}
`;

export const SocialList = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 26px;
  transition: all 0.2s ease;
  width: 100%;
  padding-bottom: 32px;
  a {
    display: flex;
    width: fit-content;
    height: fit-content;
  }
`;
