import { IActiveble } from "@/common/types";
import { convertHexToRgba } from "@/utils/colorUtil";
import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  height: 310px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  ${({ theme }) => css`
    background-color: ${convertHexToRgba(theme.colors.secondary, 0.1)};
  `}
`;

export const StyledPanel = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 24px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 1;
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`;

export const StyledImage = styled.img<IActiveble & { $isPrevious: boolean }>`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 1s ease-in;
  object-position: center 30%;
  ${({ $isActive, $isPrevious }) => css`
    opacity: ${$isActive ? 1 : $isPrevious ? 1 : 0};
    z-index: ${$isActive ? 1 : 0};
  `}
`;

export const StyledTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    ${theme.fontSizes.big};
    b {
      color: ${theme.colors.secondary};
    }
  `}
`;
export const StyledSubTitle = styled.p`
  ${({ theme }) => css`
    color: ${convertHexToRgba(theme.colors.text, 0.75)};
    ${theme.fontSizes.medium};
    ${theme.common.secondFontFamily}
  `}
`;
