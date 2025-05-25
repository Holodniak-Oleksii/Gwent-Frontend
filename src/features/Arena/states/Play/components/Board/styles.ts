import { convertHexToRgba } from "@/utils/colorUtil";
import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  gap: 12px;
  grid-template-rows: calc(50% - 14px) 4px calc(50% - 14px);
`;

export const StyledLine = styled.hr`
  outline: none;
  ${({ theme }) => css`
    height: 4px;
    border: 1px solid ${convertHexToRgba(theme.colors.text, 0.1)};
    box-shadow: inset 0px -15px 50px ${convertHexToRgba(theme.colors.focus, 0.5)};
  `}
`;

export const StyledContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 6px;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, calc(100% / 3 - 3px));
`;

export const StyledList = styled.div`
  flex-grow: 1;
  height: 100%;
  position: relative;
  ${({ theme }) => css`
    border-bottom: 2px solid ${convertHexToRgba(theme.colors.text, 0.1)};
    border-right: 2px solid ${convertHexToRgba(theme.colors.text, 0.1)};
    border-left: 2px solid ${convertHexToRgba(theme.colors.text, 0.1)};
    background-color: ${convertHexToRgba(theme.colors.focus, 0.05)};
    box-shadow: inset ${convertHexToRgba(theme.colors.focus, 0.8)} 0px -15px 25px,
      inset ${convertHexToRgba(theme.colors.focus, 0.5)} 0px -5px 10px;
  `}
`;

export const StyledCardsList = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

export const StyledRow = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  gap: 6px;
  ${({ theme }) => css`
    background-color: ${convertHexToRgba(theme.colors.text, 0.025)};
  `}
`;

export const StyledEffect = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(9, 9, 121, 0.5) 0%,
    rgba(0, 212, 255, 0) 70%
  );
`;

export const StyledCard = styled.img`
  height: 100%;
  width: auto;
`;

export const StyledHorn = styled.div`
  height: 100%;
  aspect-ratio: 1/1;
  position: relative;
  img {
    left: 8px;
    top: 8px;
    position: absolute;
    height: calc(100% - 16px);
    width: calc(100% - 16px);
    filter: brightness(0.5);
  }
  ${({ theme }) => css`
    border-bottom: 2px solid ${convertHexToRgba(theme.colors.text, 0.1)};
    border-right: 2px solid ${convertHexToRgba(theme.colors.text, 0.1)};
    border-left: 2px solid ${convertHexToRgba(theme.colors.text, 0.1)};

    background-color: ${convertHexToRgba(theme.colors.focus, 0.05)};
    box-shadow: inset ${convertHexToRgba(theme.colors.focus, 0.8)} 0px -15px 25px,
      inset ${convertHexToRgba(theme.colors.focus, 0.5)} 0px -5px 10px;
  `}
`;

export const StyledForceIcon = styled.img`
  position: absolute;
  left: 50%;
  top: 8px;
  transform: translateX(-50%);
  height: calc(100% - 16px);
  aspect-ratio: 1/1;
  filter: brightness(0.6);
`;
