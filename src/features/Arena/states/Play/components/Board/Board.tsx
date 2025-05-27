import { EForces } from "@/common/types";
import { Row } from "./Row";
import { StyledContainer, StyledLine, StyledWrapper } from "./styles";

export const Board = () => (
  <StyledWrapper>
    <StyledContainer>
      {[EForces.SIEGE, EForces.RANGED, EForces.CLOSE].map((pos) => (
        <Row isMyCards={false} position={pos} />
      ))}
    </StyledContainer>
    <StyledLine />
    <StyledContainer>
      {[EForces.CLOSE, EForces.RANGED, EForces.SIEGE].map((pos) => (
        <Row isMyCards position={pos} />
      ))}
    </StyledContainer>
  </StyledWrapper>
);
