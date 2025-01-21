import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 16px;
  height: 90%;
`;

export const StyledCards = styled.div`
  width: 40%;
  background-color: #efefefa1;
  padding: 24px;
  border: 1px solid #c6c6c683;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
`;

export const StyledLeader = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const StyledCardOverlay = styled.div`
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
`;

export const StyledLeaderImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
`;

export const StyledText = styled.div`
  text-align: center;
  padding: 12px;
`;
