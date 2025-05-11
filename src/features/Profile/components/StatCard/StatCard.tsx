import { FC, ReactNode } from "react";
import { StyledIcon, StyledName, StyledValue, StyledWrapper } from "./styles";

export interface IStat {
  name: string;
  icon: ReactNode;
  value: string | number;
}

export const StatCard: FC<IStat> = ({ icon, name, value }) => (
  <StyledWrapper>
    <StyledIcon>{icon}</StyledIcon>
    <StyledValue>{value}</StyledValue>
    <StyledName>{name}</StyledName>
  </StyledWrapper>
);
