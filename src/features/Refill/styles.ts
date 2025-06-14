import { convertHexToRgba } from "@/utils/colorUtil";
import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: 100svh;
  ${({ theme }) => css`
    ${theme.spacing.layout};
    ${theme.common.bgTexture};
  `};
`;

export const StyledContainer = styled.div`
  ${({ theme }) => theme.spacing.content};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
`;

export const StyledMessage = styled.div`
  max-width: 1000px;
  ${({ theme }) => css`
    ${theme.fontSizes.regular};
    color: ${theme.colors.text};
    p {
      padding: 12px 0;
      ${theme.common.secondFontFamily};
    }
    b {
      color: ${theme.colors.secondary};
    }
    u {
      ${theme.common.secondFontFamily};
      color: ${theme.colors.secondary};
    }
    strong {
      color: ${theme.colors.gold};
    }
    a {
      ${theme.common.secondFontFamily};
      color: ${theme.colors.gold};
    }
  `}
`;

export const StyledImageOverlay = styled.div`
  width: 240px;
  height: 240px;
  overflow: hidden;
  border-radius: 6px;
  ${({ theme }) => css`
    box-shadow: inset 0px 5px 25px ${theme.colors.focus},
      0px 5px 5px ${theme.colors.focus};
    border: 3px solid ${theme.colors.gold};
  `}
`;

export const StyledQRImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const StyledAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  button {
    min-width: 100px;
  }
`;

export const StyledCode = styled.div`
  width: 140px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  gap: 4px;
  svg,
  span {
    margin-left: auto;
  }
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.secondary};
    span {
      ${theme.common.secondFontFamily};
      color: ${theme.colors.text};
      ${theme.fontSizes.medium};
      ${theme.common.textShadow};
    }
    background-color: ${convertHexToRgba(theme.colors.secondary, 0.1)};
  `}
`;
