import { convertHexToRgba } from "@/utils/colorUtil";
import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin-top: auto;
    &:disabled {
      cursor: not-allowed;
    }
  }
  ${({ theme }) => css`
    gap: 8px;
    margin: 44px 16px 16px 16px;
    ${theme.media.width.lg} {
      gap: 4px;
      margin: 24px 16px 16px 16px;
    }
    ${theme.media.width.xs} {
      position: absolute;
      top: 16px;
      width: 100%;
      left: 0;
      margin: 0;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: center;
      button {
        width: calc(100% - 40px);
      }
    }
  `}
`;

export const StyledOverlay = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 16px;
  ${({ theme }) => css`
    max-width: 160px;
    ${theme.media.width.lg} {
      max-width: 120px;
    }
    ${theme.media.width.sm} {
      max-width: 80px;
    }
    ${theme.media.width.xs} {
      margin: 0;
      max-width: 100%;
      display: flex;
      img {
        margin: auto;
        max-width: 80px;
      }
    }
  `}
`;

export const StyledImage = styled.img`
  aspect-ratio: 20/32;
  border-radius: 12px;
  width: 100%;
  object-fit: cover;
`;

export const StyledItem = styled.div<{ error: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  ${({ theme, error }) => css`
    span,
    b {
      ${theme.common.secondFontFamily};
      ${theme.fontSizes.small};
    }
    span {
      color: ${error
        ? theme.colors.error
        : convertHexToRgba(theme.colors.text, 0.3)};
    }
    b {
      color: ${error
        ? theme.colors.error
        : convertHexToRgba(theme.colors.gold, 0.9)};
    }
    ${theme.media.width.xs} {
      width: fit-content;
      * {
        white-space: nowrap;
      }
    }
  `}
`;

export const StyledFlex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    object-fit: contain;
    object-position: center;
  }
  ${({ theme }) => css`
    img {
      width: 30px;
      height: 30px;
    }
    ${theme.media.width.sm} {
      img {
        width: 20px;
        height: 20px;
      }
    }
  `}
`;
