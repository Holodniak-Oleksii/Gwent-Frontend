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
    ${theme.media.width.xs} {
      border: 1px solid ${theme.colors.bgneonLight};
      padding: 16px;
      justify-content: space-between;
    }
    ${theme.media.width.xxs} {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  `}
`;

export const StyledPanel = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 16px;
  z-index: 3;
  ${({ theme }) => css`
    height: 220px;
    background-color: ${theme.colors.bgneonLight};
    ${theme.common.bgTexture};
    ${theme.media.width.md} {
      height: 150px;
    }
  `}
`;

export const StyledIcon = styled.button`
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 24px;
    height: 24px;
  }
  ${({ theme }) => css`
    background-color: ${theme.colors.bgneonLight};
    ${theme.media.width.md} {
      padding: 6px;
      svg {
        width: 16px;
        height: 16px;
      }
    }
  `}
`;

export const StyledInfo = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  z-index: 4;
  ${({ theme }) => css`
    padding: 24px;
    grid-template-columns: 1fr minmax(200px, 360px) 1fr;
    ${theme.media.width.md} {
      grid-template-columns: 1fr minmax(160px, 280px) 1fr;
      padding: 16px;
    }
    ${theme.media.width.xs} {
      grid-template-columns: 100%;
    }
  `}
`;

export const StyledCover = styled.div`
  width: 100%;
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`;

export const StyledRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  ${({ theme }) => css`
    border-top: 1px solid ${convertHexToRgba(theme.colors.secondary, 0.1)};
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
  ${({ theme }) => css`
    height: 45px;
    width: 200px;
    ${theme.media.width.md} {
      height: 32px;
      width: 160px;
    }
  `}
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
