import { getCardWidth } from "@/utils";
import { convertHexToRgba } from "@/utils/colorUtil";
import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
`;

export const StyledTitle = styled.span`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(calc(-100% - 16px));
  ${({ theme }) => css`
    ${theme.fontSizes.medium};
    ${theme.common.secondFontFamily};
    color: ${convertHexToRgba(theme.colors.text, 0.8)};
  `}
`;

export const StyledList = styled.div`
  height: fit-content;
  width: 100%;
  padding: 16px;
  gap: 16px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;

  ${({ theme }) => css`
    & > div {
      width: ${getCardWidth("16px", 3)};
      ${theme.media.width.md} {
        width: ${getCardWidth("16px", 2)};
      }
    }
    ${theme.media.width.xs} {
      padding: 8px;
      gap: 8px;
      & > div {
        width: ${getCardWidth("8px", 2)};
      }
    }
    ${theme.media.width.xxs} {
      & > div {
        width: 100%;
      }
    }
  `}
`;

export const StyledCardOverlay = styled.div`
  cursor: pointer;
  transition: all 0.1s linear;
  &:hover {
    transform: scale(1.02);
  }
  ${({ theme }) => css`
    ${theme.media.width.sm} {
      .hero-card-panel {
        padding: 8px;
      }
      .hero-card-image {
        height: calc(100% - 40px);
      }
    }
    ${theme.media.width.xs} {
      .hero-card-panel {
        padding: 4px;
      }
      .hero-card-image {
        height: calc(100% - 28px);
      }
    }
  `}
`;

export const StyledContent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  overflow-y: auto;

  ${({ theme }) => css`
    background-color: ${theme.colors.bgneon};
    border: 1px solid ${theme.colors.placeholder};
    border-radius: 8px;
    &::-webkit-scrollbar {
      width: 3px;
      background-color: ${theme.colors.bgneon};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${convertHexToRgba(theme.colors.lightText, 0.6)};
    }
  `}
`;
