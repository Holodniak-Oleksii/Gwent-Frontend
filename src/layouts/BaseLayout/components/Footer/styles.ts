import { convertHexToRgba } from "@/utils/colorUtil";
import styled, { css } from "styled-components";

export const StyledOverlay = styled.footer`
  position: relative;
  z-index: 2;
  width: 100%;
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`;

export const StyledWrapper = styled.div`
  width: 100%;
  ${({ theme }) => css`
    ${theme.spacing.content};
  `}
`;

export const StyledTerms = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    ${theme.spacing.content};
    border-top: 1px solid ${convertHexToRgba(theme.colors.secondary, 0.2)};
    * {
      padding: 32px 0;
      color: ${theme.colors.text};
      ${theme.fontSizes.small};
    }
    ${theme.media.width.xxs} {
      flex-direction: column;
      * {
        padding: 16px 0;
      }
    }
  `}
`;

export const StyledContent = styled.div`
  display: flex;
  ${({ theme }) => css`
    padding: 80px 0;
    ${theme.media.width.lg} {
      padding: 60px 0;
    }
    ${theme.media.width.sm} {
      flex-wrap: wrap;
      gap: 60px;
    }
    ${theme.media.width.xxs} {
      gap: 16px;
      padding: 32px 0;
    }
  `};
`;

export const StyledColumn = styled.div`
  width: fit-content;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${({ theme }) => css`
    ${theme.media.width.sm} {
      &:first-child {
        width: 100%;
      }
    }
    ${theme.media.width.xs} {
      margin-bottom: 32px;
    }
  `};
`;

export const StyledLinks = styled(StyledColumn)`
  gap: 24px;
  margin: 0 auto;
`;

export const StyledSocial = styled.div`
  margin-top: auto;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledMessage = styled.span`
  max-width: 400px;
  ${({ theme }) => css`
    ${theme.fontSizes.medium};
    color: ${theme.colors.text};
    ${theme.media.width.sm} {
      max-width: 100%;
    }
  `}
`;

export const StyledLogoImage = styled.img`
  width: 100px;
  height: 75px;
  object-fit: contain;
`;

export const StyledItem = styled.span`
  ${({ theme }) => css`
    ${theme.fontSizes.medium};
    color: ${theme.colors.text};
  `}
`;

export const StyledTitle = styled.span`
  margin-bottom: 12px;
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    ${theme.fontSizes.regular};
  `}
`;
