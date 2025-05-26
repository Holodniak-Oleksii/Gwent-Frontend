import { convertHexToRgba } from "@/utils/colorUtil";
import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const StyledAbsolute = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  height: 80%;
  max-height: 140px;
  width: calc(100% - 24px);
  padding: 8px;
  display: flex;
  ${({ theme }) => css`
    border: 5px solid ${convertHexToRgba(theme.colors.text, 0.1)};
    box-shadow: inset 0px 5px 25px ${theme.colors.focus},
      0px 5px 5px ${theme.colors.focus};
  `}
`;

export const StyledList = styled.div`
  width: fit-content;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const StyledImage = styled.img`
  height: 100%;
  object-fit: cover;
  aspect-ratio: 3/4;
`;
