import { IActiveble } from "@/common/types";
import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    gap: 32px;
    ${theme.media.width.xxs} {
      gap: 16px;
    }
  `}
`;

export const StyledRange = styled(StyledWrapper)`
  ${({ theme }) => css`
    gap: 24px;
    ${theme.media.width.xxs} {
      gap: 20px;
    }
  `}
`;

export const StyledArrowButtonPrev = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  padding: 1px;
  transform: rotate(90deg);
  transition: all 0.4s ease-in-out;
  &:disabled {
    filter: opacity(0.1);
    cursor: default;
  }
  &:not([disabled]) {
    &:active {
      transform: scale(0.8) rotate(90deg);
    }
  }

  img {
    border-radius: 50%;
    height: 32px;
    width: 32px;
    padding: 9px;
  }
`;

export const StyledArrowButtonNext = styled(StyledArrowButtonPrev)`
  transform: rotate(270deg);
  &:not([disabled]) {
    &:active {
      transform: scale(0.8) rotate(270deg);
    }
  }
`;

export const StyledButtonPage = styled.button<IActiveble>`
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.secondary : theme.colors.text};
  font-size: 16px;
  font-weight: 600;
`;
