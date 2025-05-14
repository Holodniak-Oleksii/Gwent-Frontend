import imageBg from "@/assets/images/power-hero.webp";
import { StyledCircle } from "@/components/cards/plugs/styles";
import { FC } from "react";
import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
`;
const StyledPlugImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  transform: translateX(-10px) translateY(-11px);
`;
const StyledContainer = styled.div`
  position: relative;
  ${({ theme }) => css`
    color: ${theme.colors.text};
    ${theme.fontSizes.regular};
    ${theme.common.secondFontFamily};
    font-weight: 700;
  `}
`;

interface IHeroProps {
  power: number;
}

export const Hero: FC<IHeroProps> = ({ power }) => {
  return (
    <StyledWrapper>
      <StyledPlugImage src={imageBg} alt="bg" />
      <StyledCircle>
        <StyledContainer>{power}</StyledContainer>
      </StyledCircle>
    </StyledWrapper>
  );
};
