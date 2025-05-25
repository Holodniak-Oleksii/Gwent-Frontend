import styled from "styled-components";

export const StyledCircle = styled.div`
  border-radius: 50%;
  position: relative;
  aspect-ratio: 1 / 1;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
