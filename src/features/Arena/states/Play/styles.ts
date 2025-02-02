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
  flex-direction: column;
  gap: 8px;
  background-color: #efefef;
`;

export const StyledPlayerRow = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  position: relative;
  background-color: #bbbbbb;
`;

export const StyledCounts = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  p {
    font-size: 18px;
  }
`;

export const StyledCards = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  span {
    font-weight: 800;
  }
  align-items: center;
`;

export const StyledRoundsList = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  gap: 8px;
`;

export const StyledRoundCircle = styled.div<{ isLose: boolean }>`
  background-color: ${({ isLose }) => (isLose ? "#605a5a" : "red")};
  width: 16px;
  aspect-ratio: 1/1;
  border-radius: 50%;
`;

export const StyledAvatar = styled.div`
  width: 60px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: 3px solid #fff;
  background-color: #aaa9a9;
  color: #fff;
  display: flex;
  font-size: 32px;
  align-items: center;
  justify-content: center;
`;

export const StyledScore = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(40%, -50%);
  border-radius: 50%;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: #2189ff;
  border: 3px solid #70aff7;
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
