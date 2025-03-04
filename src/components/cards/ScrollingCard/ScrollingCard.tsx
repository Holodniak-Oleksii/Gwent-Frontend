import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
  height: 100%;
  width: 210px;
  position: relative;
  box-shadow: rgba(130, 255, 124, 0.1) 0px 8px 16px,
    rgba(209, 248, 126, 0.1) 0px 16px 32px,
    rgba(136, 250, 136, 0.1) 0px 24px 48px;
  &::after {
    content: "";
    width: calc(100% - 16px);
    height: 1px;
    border-radius: 50%;
    position: absolute;
    bottom: -8px;
    left: 8px;
    ${({ theme }) => css`
      background-color: ${theme.colors.secondary};
    `}
  }
`;

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 4px;
  box-shadow: #16cc8fc4 0 0 0 2px inset, #16cc8f7a 0px -4px, #16cc8f90 0px -8px,
    #16cc8f35 0px -12px;
`;

const StyledImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.primary};
  `}
`;

export const ScrollingCard = ({ image }: { image: string }) => (
  <StyledWrapper>
    <StyledContainer>
      <StyledImage src={image} alt="carousel image" />
    </StyledContainer>
  </StyledWrapper>
);
