import styled from "styled-components";

export const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #e6e6e6;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr) 2px repeat(3, 1fr);
  gap: 12px;
`;

export const StyledRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 100%;
  background-color: #ffcbcb;
`;

export const StyledCard = styled.img`
  height: 100%;
  width: auto;
`;
