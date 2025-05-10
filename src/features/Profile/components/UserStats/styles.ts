import { convertHexToRgba } from "@/utils/colorUtil";
import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.bgneonLight};
  `}
`;

export const StyledContainer = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  ${({ theme }) => css`
    ${theme.spacing.content}
  `}
`;

export const StyledAvatarContainer = styled.div`
  order: 3;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 80px 16px 16px;
  width: 100%;
  max-width: 360px;
  ${({ theme }) => css`
    background-color: ${convertHexToRgba(theme.colors.bgcolor, 0.4)};
    border: 1px solid ${theme.colors.bgneonLight};
  `}
`;

export const StyledGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`;

export const StyledName = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    ${theme.fontSizes.regular}
  `}
`;

export const StyledTextBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 8px;
  svg {
    height: 24px;
  }
  ${({ theme }) => css`
    background-color: ${theme.colors.bgneon};
    span {
      color: ${theme.colors.text};
      ${theme.fontSizes.medium}
    }
  `}
`;

export const StyledAvatar = styled.div`
  width: 180px;
  aspect-ratio: 1/1;
  overflow: hidden;
  margin-bottom: 24px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.secondary};
    background-color: ${theme.colors.bgcolor};
  `}
`;
