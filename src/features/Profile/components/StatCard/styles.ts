import { convertHexToRgba } from "@/utils/colorUtil";
import styled, { css } from "styled-components";

export const StyledWrapper = styled.div<{ order: number }>`
  order: ${({ order }) => order};
  padding-top: 80px;
  max-width: 200px;
  width: 100%;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }
`;

export const StyledName = styled.span`
  ${({ theme }) => css`
    font-weight: 300;
    color: ${convertHexToRgba(theme.colors.text, 0.6)};
    ${theme.fontSizes.small};
    ${theme.common.secondFontFamily}
  `}
`;

export const StyledValue = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    ${theme.fontSizes.big};
  `}
`;

export const StyledIcon = styled.div`
  height: 100px;
  ${({ theme }) => css`
    background-color: ${theme.colors.bgneonLight};
    padding: 16px;
  `}
  svg {
    height: 100%;
    width: fit-content;
  }
`;
