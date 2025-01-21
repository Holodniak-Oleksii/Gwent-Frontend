import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 200px;
  height: 320px;
  background-color: #dfdfdf56;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: calc(100% - 60px);
  object-fit: cover;
`;

export const StyledPanel = styled.div`
  width: 100%;
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
`;

export const StyledLabel = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledCircle = styled.div`
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  height: 32px;
  background-color: gold;
  padding: 2px;
`;
