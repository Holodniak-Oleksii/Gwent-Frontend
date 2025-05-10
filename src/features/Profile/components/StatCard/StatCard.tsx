import { NeonParagraph } from "@/components/shared/NeonParagraph";
import { FC, ReactNode } from "react";
import { StyledIcon, StyledName, StyledValue, StyledWrapper } from "./styles";

export interface IStat {
  name: string;
  icon: ReactNode;
  value: string | number;
  order: number;
}

export const StatCard: FC<IStat> = ({ icon, name, value, order }) => (
  <StyledWrapper order={order}>
    <NeonParagraph>
      <StyledIcon>{icon}</StyledIcon>
      <StyledValue>{value}</StyledValue>
      <StyledName>{name}</StyledName>
    </NeonParagraph>
  </StyledWrapper>
);
