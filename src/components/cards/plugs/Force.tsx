import { dataForceIcon } from "@/common/constants/images";
import { StyledCircle } from "./styles";

import { EForces } from "@/common/types";
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

export const Force: FC<IForceProps> = ({ force }) => (
  <StyledWrapper>
    <StyledCircle>
      <StyledContainer>
        <img src={dataForceIcon[force]} alt={force} />
      </StyledContainer>
    </StyledCircle>
  </StyledWrapper>
);
