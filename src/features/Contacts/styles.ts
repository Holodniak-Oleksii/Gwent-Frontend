import { convertHexToRgba } from "@/utils/colorUtil";
import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  height: 100svh;
  width: 100%;
  min-height: fit-content;
  ${({ theme }) => css`
    ${theme.spacing.layout};
    ${theme.common.bgTexture}
  `}
`;

export const StyledContainer = styled.div`
  ${({ theme }) => css`
    ${theme.spacing.content};
    ${theme.media.width.md} {
      padding-right: 80px;
    }
    ${theme.media.width.sm} {
      padding-right: 32px;
    }
    ${theme.media.width.xs} {
      padding-right: 16px;
    }
  `}
  width: 100%;
  height: 100%;
  min-height: fit-content;
  display: flex;
  gap: 32px;
`;

export const StyledOverlay = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1200px;
  height: fit-content;
  border-radius: 8px;
  display: grid;
  position: relative;
  grid-template-columns: repeat(2, calc(50% - 8px));
  gap: 16px;
  ${({ theme }) => css`
    background-color: ${convertHexToRgba(theme.colors.primary, 0.3)};
    border: 2px solid ${convertHexToRgba(theme.colors.secondary, 0.1)};
    box-shadow: 0px 1px 25px ${theme.colors.focus},
      0px 1px 5px ${theme.colors.focus};
    ${theme.media.width.sm} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 32px;
  button {
    margin-top: 16px;
  }
`;

export const StyledTitle = styled.span`
  ${({ theme }) => css`
    ${theme.fontSizes.large};
    color: ${theme.colors.secondary};
  `}
`;

export const StyledSubTitle = styled.p`
  margin-bottom: 32px;
  ${({ theme }) => css`
    ${theme.fontSizes.medium};
    ${theme.common.secondFontFamily};
    color: ${theme.colors.text};
  `}
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;

export const StyledContacts = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  border-radius: 0 8px 0 8px;
  overflow: hidden;
`;
