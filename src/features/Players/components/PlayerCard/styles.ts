import { convertHexToRgba } from "@/utils/colorUtil";
import styled, { css } from "styled-components";

export const StyledOverlay = styled.div`
  width: 100%;
  padding-left: 45px;
`;

export const StyledWrapper = styled.div`
  width: 100%;
  padding-top: 80px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  ${({ theme }) => css`
    background-color: ${theme.colors.bgneonLight};
  `}
`;

export const StyledContainer = styled.div`
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  border-radius: 8px;
  ${({ theme }) => css`
    border: 1px solid ${convertHexToRgba(theme.colors.secondary, 0.25)};
    background-color: ${theme.colors.primary};
  `}
`;

export const StyledIconWrapper = styled.div`
  width: 100%;
  position: relative;
  min-height: 72px;
  padding-left: 72px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const StyledIcon = styled.div`
  position: absolute;
  width: 100%;
  max-width: 120px;
  left: 0;
  top: 0;
  transform: translateX(-50%) translateY(-50%);
`;

export const StyledRang = styled.div`
  position: absolute;
  right: -4px;
  top: -4px;
  svg {
    width: 24px;
    height: 24px;
  }
`;

export const StyledName = styled.span`
  text-align: center;
  ${({ theme }) => css`
    ${theme.fontSizes.regular};
    color: ${theme.colors.text};
  `}
`;

export const StyledAction = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  button,
  a {
    width: calc(50% - 6px);
  }
`;

export const StyledCenter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  svg {
    width: 18px;
    height: 18px;
  }
`;

export const StyledDescription = styled.p`
  ${({ theme }) => css`
    ${theme.fontSizes.medium};
    color: ${convertHexToRgba(theme.colors.gold, 0.9)};
  `}
`;
