import { IActiveble } from "@/common/types";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledWrapper = styled.header<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 1000;
  backdrop-filter: blur(3px);
  transition: all 0.4s ease-in-out;
  ${({ theme, $isVisible }) => css`
    background: ${theme.colors.bgneon};
    border-bottom: 1px solid ${theme.colors.border};
    transform: translateY(${$isVisible ? 0 : -100}%);
  `}
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  gap: 72px;

  ${({ theme }) => css`
    ${theme.spacing.content}
    ${theme.media.width.lg} {
      gap: 56px;
    }
  `};
`;

export const StyledLink = styled(Link)<IActiveble>`
  position: relative;
  letter-spacing: 0.5px;
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateY(4px) translateX(-50%);
    height: 1px;
    transition: width 0.2s ease-in;
  }
  ${({ theme, $isActive }) => css`
    ${theme.fontSizes.medium};
    color: ${theme.colors.text};
    &::before {
      background-color: ${theme.colors.secondary};
      width: ${$isActive ? "calc(100% + 8px)" : 0};
    }
  `}
`;

export const StyledList = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const StyledLogo = styled(Link)`
  height: 100%;
  width: auto;
  img {
    width: auto;
    height: 100%;
  }
`;

export const StyledAction = styled.div`
  display: flex;
  gap: 16px;
  margin-left: auto;
  align-items: center;
`;

export const StyledNotify = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
