import imageAgile from "@/assets/images/combats/agile.webp";
import imageClose from "@/assets/images/combats/close.webp";
import imageRanged from "@/assets/images/combats/ranged.webp";
import imageSiege from "@/assets/images/combats/siege.webp";
import { EForces } from "@/common/types";
import { StyledCircle } from "./styles";

import { FC } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 40%;
`;

interface IForceProps {
  force: EForces;
}

const dataIcon = {
  [EForces.SIEGE]: imageSiege,
  [EForces.CLOSE]: imageClose,
  [EForces.RANGED]: imageRanged,
  [EForces.AGILE]: imageAgile,
};

export const Force: FC<IForceProps> = ({ force }) => (
  <StyledWrapper>
    <StyledCircle>
      <StyledContainer>
        <img src={dataIcon[force]} alt={force} />
      </StyledContainer>
    </StyledCircle>
  </StyledWrapper>
);
