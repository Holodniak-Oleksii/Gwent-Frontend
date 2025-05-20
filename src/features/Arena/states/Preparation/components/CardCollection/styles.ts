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
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  padding: 16px;
  gap: 16px;
  flex-wrap: wrap;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
  overflow-y: auto;

  ${({ theme }) => css`
    background-color: ${theme.colors.bgneon};
    border: 1px solid ${theme.colors.placeholder};
    border-radius: 8px;
    & > div {
      width: ${getCardWidth("16px", 3)};
    }

    &::-webkit-scrollbar {
      width: 3px;
      background-color: ${theme.colors.bgneon};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${convertHexToRgba(theme.colors.lightText, 0.6)};
    }
  `}
`;

export const StyledCardOverlay = styled.div`
  cursor: pointer;
  transition: all 0.1s linear;
  &:hover {
    transform: scale(1.02);
  }
`;
