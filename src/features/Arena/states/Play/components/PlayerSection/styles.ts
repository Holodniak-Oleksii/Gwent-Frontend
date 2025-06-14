import { IActiveble } from "@/common/types";
import { convertHexToRgba } from "@/utils/colorUtil";
import styled, { css } from "styled-components";

interface IWrapper {
  $isEnemy: boolean;
}

export const StyledWrapper = styled.div<IWrapper>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  ${({ theme, $isEnemy }) => css`
    flex-direction: ${$isEnemy ? "column" : "column-reverse"};
    ${theme.media.width.lg} {
      gap: 16px;
    }
  `}
`;

export const StyledAvatarWrapper = styled.div`
  margin-left: auto;
  margin-bottom: auto;
  ${({ theme }) => css`
    width: 80px;
    ${theme.media.width.lg} {
      width: 70px;
    }
    ${theme.media.width.md} {
      margin-right: auto;
    }
  `}
`;

export const StyledRow = styled.div<IActiveble>`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  ${({ theme, $isActive }) => css`
    padding: 24px 48px 24px 24px;
    gap: 12px;
    border-top: 1px solid
      ${convertHexToRgba(theme.colors.gold, $isActive ? 0.5 : 0.1)};
    border-bottom: 1px solid
      ${convertHexToRgba(theme.colors.gold, $isActive ? 0.5 : 0.1)};
    box-shadow: inset 0px 5px 25px ${theme.colors.focus},
      0px 5px 5px ${theme.colors.focus};
    background-color: ${convertHexToRgba(
      theme.colors.focus,
      $isActive ? 0.5 : 0.2
    )};

    ${theme.media.width.lg} {
      padding: 16px 32px 16px 16px;
    }
    ${theme.media.width.md} {
      flex-direction: column;
    }
  `}
`;

export const StyledCounts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-grow: 1;
  ${({ theme }) => css`
    span,
    p {
      color: ${theme.colors.gold};
    }
    b {
      color: ${convertHexToRgba(theme.colors.text, 0.5)};
      ${theme.common.secondFontFamily};
      font-weight: 100;
      ${theme.fontSizes.small};
      margin-bottom: 12px;
    }
    p {
      ${theme.fontSizes.big};
    }
    span {
      ${theme.fontSizes.regular};
    }
    ${theme.media.width.lg} {
      b {
        margin-bottom: 6px;
      }
    }
    ${theme.media.width.md} {
      align-items: center;
    }
  `}
`;

export const StyledCards = styled.div`
  width: 100%;
  display: flex;
  gap: 4px;
  align-items: center;
  img {
    width: 32px;
    aspect-ratio: 1/1;
    object-fit: contain;
    ${({ theme }) => css`
      width: 32px;
      ${theme.media.width.lg} {
        width: 24px;
      }
    `}
  }
`;

export const StyledRoundsList = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledRoundCircle = styled.img<{ $isLose: boolean }>`
  object-fit: contain;
  aspect-ratio: 1/1;
  ${({ $isLose }) => css`
    filter: grayscale(${$isLose ? 1 : 0});
  `}
`;
