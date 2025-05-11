import { convertHexToRgba } from "@/utils/colorUtil";
import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => css`
    ${theme.spacing.content}
  `}
`;

export const StyledContainer = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.placeholder};
    border-radius: 8px;
  `}
`;

export const StyledOverlay = styled.div`
  width: 100%;
  padding: 120px 0 0;
`;

export const StyledGrid = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  z-index: 4;
  ${({ theme }) => css`
    hr {
      height: 100%;
      outline: none;
      border: none;
      width: 1px;
      background-color: ${theme.colors.bgneonLight};
      &:last-child {
        display: none;
      }
    }
  `}
`;

export const StyledPanel = styled.div`
  height: 200px;
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 3;
  ${({ theme }) => css`
    background-color: ${theme.colors.bgneonLight};
    ${theme.common.bgTexture};
  `}
`;

export const StyledInfo = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  z-index: 4;
  padding: 24px;
  grid-template-columns: 1fr minmax(200px, 360px) 1fr;
  ${({ theme }) => css`
    filter: drop-shadow(0px 0px 1px ${theme.colors.secondary});
    background-color: ${theme.colors.primary};
  `}
`;

export const StyledFrame = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-end;
`;

export const StyledColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const StyledAvatarContainer = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
`;

export const StyledAvatarWrapper = styled.div`
  height: 45px;
  width: 200px;
  position: relative;
`;

export const StyledDate = styled.span`
  ${({ theme }) => css`
    font-weight: 300;
    ${theme.fontSizes.small};
    ${theme.common.secondFontFamily};
    color: ${convertHexToRgba(theme.colors.text, 0.6)};
  `}
`;

export const StyledName = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  ${({ theme }) => css`
    color: ${theme.colors.text};
    ${theme.fontSizes.big};
  `}
`;

export const StyledCoins = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gold};
    ${theme.fontSizes.regular};
  `}
`;
