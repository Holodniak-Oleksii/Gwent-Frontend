import { IActiveble } from "@/common/types";
import { convertHexToRgba } from "@/utils/colorUtil";
import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  position: sticky;
  height: calc(100svh - 100px);
  min-height: 600px;
  max-height: 1080px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
`;

export const StyledText = styled.span<IActiveble>`
  position: absolute;
  text-transform: uppercase;
  transition: all 0.2s ease-in;

  ${({ theme, $isActive }) => css`
    ${$isActive
      ? css`
          opacity: 1;
          transform: translateY(-50%);
        `
      : css`
          opacity: 0;
        `}
    top: 20%;
    left: 10%;
    font-size: 130px;
    color: ${convertHexToRgba(theme.colors.text, 0.7)};
    ${theme.media.width.lg} {
      font-size: 100px;
      top: 14%;
      left: 8%;
    }
  `}
`;

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  ${({ theme }) => css`
    ${theme.spacing.content}
  `}
`;

export const StyledList = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;
  padding-bottom: 32px;
  margin-top: auto;
  margin-left: auto;
`;

export const StyledImage = styled.img`
  aspect-ratio: 1/1;
  width: 100%;
  filter: grayscale(0.2);
`;

export const StyledCardOverlay = styled.div<IActiveble>`
  transition: all 0.2s ease-in;
  cursor: pointer;
  padding: 4px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme, $isActive }) => css`
    background-color: ${theme.colors.bgneon};
    ${$isActive
      ? css`
          width: 80px;
          filter: drop-shadow(0px 0px 8px ${theme.colors.gold});
        `
      : css`
          width: 60px;
        `}
  `}
`;

export const StyledBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
