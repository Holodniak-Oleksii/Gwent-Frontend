import imageBg from "@/assets/images/game/board.jpg";
import { convertHexToRgba } from "@/utils/colorUtil";
import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${imageBg});
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 20px 20px 100px #000;
  display: grid;
  grid-template-columns: 4fr 12fr 3fr;
  position: relative;
`;

export const StyledPlayers = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 24px 0;
  ${({ theme }) => css`
    box-shadow: inset 0px 5px 25px ${theme.colors.focus},
      0px 5px 5px ${theme.colors.focus};
    background-color: ${convertHexToRgba(theme.colors.focus, 0.1)};
  `}
`;

export const StyledIndicator = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledBoard = styled.div`
  width: 100%;
  flex-grow: 1;
  padding: 16px 32px 8px 32px;
`;

export const StyledList = styled.div<{ disabled: boolean }>`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 4px;

  ${({ theme, disabled }) =>
    css`
      border: 2px solid
        ${disabled
          ? convertHexToRgba(theme.colors.text, 0.1)
          : convertHexToRgba(theme.colors.gold, 0.5)};
      background-color: ${convertHexToRgba(
        theme.colors.gold,
        disabled ? 0 : 0.1
      )};
      pointer-events: ${disabled ? "none" : "all"};
      opacity: ${disabled ? 0.5 : 1};
      box-shadow: inset 0px 1px 25px ${theme.colors.focus},
        0px 1px 5px ${theme.colors.focus};
    `}
`;

export const StylesCards = styled.div`
  width: 100%;
  height: 150px;
  padding: 16px 32px 16px 32px;
`;
