import { EForces } from "@/common/types";
import BowIcon from "@/components/icons/BowIcon";
import SwordIcon from "@/components/icons/SwordIcon";
import TrebuchetIcon from "@/components/icons/TrebuchetIcon";
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
  background-color: #ff9603;
  border-radius: 50%;
  padding: 6px;
  svg {
    width: 100%;
    height: 100%;
  }
`;

interface IForceProps {
  force: EForces;
}

const dataIcon = {
  [EForces.SIEGE]: TrebuchetIcon,
  [EForces.CLOSE]: SwordIcon,
  [EForces.RANGED]: BowIcon,
  [EForces.AGILE]: BowIcon,
};

export const Force: FC<IForceProps> = ({ force }) => {
  const Icon = dataIcon[force];
  return (
    <StyledCircle>
      <StyledContainer>
        <Icon />
      </StyledContainer>
    </StyledCircle>
  );
};
