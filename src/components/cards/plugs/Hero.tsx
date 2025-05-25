import imageBg from "@/assets/images/power-hero.webp";
import { StyledCircle } from "@/components/cards/plugs/styles";
import { FC } from "react";
import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  transform: translateY(-20%) translateX(-16%);
`;

const StyledPlugImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 200%;
`;
const StyledContainer = styled(StyledCircle)`
  position: relative;
  transform: translateY(16%) translateX(14%);
  ${({ theme }) => css`
    color: ${theme.colors.text};
    ${theme.common.secondFontFamily};
    font-size: 100%;
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
      <StyledContainer>{power}</StyledContainer>
    </StyledWrapper>
  );
};
