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

export const StyledText = styled.span`
  position: absolute;
  top: 20%;
  transform: translateY(-50%);
  left: 10%;
  font-size: 130px;
  text-transform: uppercase;
  ${({ theme }) => css`
    color: ${convertHexToRgba(theme.colors.text, 0.6)};
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
  width: 60%;
`;

export const StyledCardOverlay = styled.div<IActiveble>`
  transition: all 0.2s ease-in;
  clip-path: polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 15% 100%, 0% 85%);
  cursor: pointer;
  padding: 1px;
  aspect-ratio: 6/9;
  ${({ theme, $isActive }) => css`
    background-color: ${theme.colors.gold};
    width: ${$isActive ? 150 : 100}px;
  `}
`;

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  clip-path: polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 15% 100%, 0% 85%);
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`;

export const StyledBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
