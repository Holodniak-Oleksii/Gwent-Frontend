import imageIcon from "@/assets/images/power-label.webp";
import { FC } from "react";
import styled, { css } from "styled-components";
import { StyledCircle } from "./styles";

const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    ${theme.fontSizes.regular};
    ${theme.common.secondFontFamily};
    font-weight: 700;
  `}
`;

interface IPowerProps {
  power: number;
}

export const Power: FC<IPowerProps> = ({ power }) => (
  <StyledCircle>
    <img src={imageIcon} alt="power label" />
    <StyledContainer>{power}</StyledContainer>
  </StyledCircle>
);
