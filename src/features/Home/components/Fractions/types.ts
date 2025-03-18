import { EFaction } from "@/common/types";

export interface IFractionCard {
  id: number;
  imageFront: string;
  imageBack: string;
  type: EFaction;
  title: string;
  description: string;
}
