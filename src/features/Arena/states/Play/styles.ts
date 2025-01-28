import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 16px;
`;

export const StyledPlayers = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledIndicator = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPlayerInfo = styled.div`
  width: 100%;
  height: calc(50% - 24px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background-color: #efefef;
`;

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledBoard = styled.div`
  width: 100%;
  flex-grow: 1;
`;

export const StylesCards = styled.div<{ disabled: boolean }>`
  width: 100%;
  max-width: 100%;
  flex-shrink: 0;
  height: 150px;
  background-color: #ababab;
  padding: 16px;
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
  overflow: auto;
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
`;
