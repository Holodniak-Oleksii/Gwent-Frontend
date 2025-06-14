import styled from "styled-components";

export const StyledBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bgcolor};
`;

export const StyledWrapper = styled.div`
  width: 100%;
  height: calc(100svh - 80px);
  min-height: 600px;
  max-height: 1080px;
  display: flex;
  flex-direction: column;
`;
