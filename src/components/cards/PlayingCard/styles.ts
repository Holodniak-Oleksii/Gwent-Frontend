import styled from "styled-components";

export const StyledWrapper = styled.div`
  height: 100%;
  aspect-ratio: 3/4;
  border-radius: 5%;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in;
  @media (hover: hover) {
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledLabel = styled.div`
  position: absolute;
  top: 2%;
  left: 2%;
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 75%;
  line-height: 1;
`;
