import styled from "styled-components";

export const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #e6e6e6;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px) 2px repeat(3, 80px);
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
  position: relative;
  padding-left: 80px;
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
  position: absolute;
  left: 16px;
  top: 20%;
  height: 60%;
  aspect-ratio: 1/1;
  background-color: #ff00007f;
  padding: 4px;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const StyledForceIcon = styled.div`
  position: absolute;
  left: 80px;
  top: 20%;
  height: 60%;
  aspect-ratio: 1/1;
  svg {
    width: 100%;
    height: 100%;
  }
`;
