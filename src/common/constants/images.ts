import imageAgile from "@/assets/images/combats/agile.webp";
import imageClose from "@/assets/images/combats/close.webp";
import imageRanged from "@/assets/images/combats/ranged.webp";
import imageSiege from "@/assets/images/combats/siege.webp";
import { EForces } from "@/common/types";

export const dataForceIcon = {
  [EForces.SIEGE]: imageSiege,
  [EForces.CLOSE]: imageClose,
  [EForces.RANGED]: imageRanged,
  [EForces.AGILE]: imageAgile,
};
