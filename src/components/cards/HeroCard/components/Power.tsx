import { StyledCircle } from "@/components/cards/HeroCard/styles";
import { FC } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  border-radius: 50%;
`;

interface IPowerProps {
  power: number;
}

export const Power: FC<IPowerProps> = ({ power }) => (
  <StyledCircle>
    <StyledContainer>{power}</StyledContainer>
  </StyledCircle>
);
