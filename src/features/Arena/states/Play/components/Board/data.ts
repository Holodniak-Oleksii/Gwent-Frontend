import imageAgile from "@/assets/images/combats/agile.webp";
import imageSword from "@/assets/images/game/close.webp";
import imageRanged from "@/assets/images/game/ranged.webp";
import imageSiege from "@/assets/images/game/siege.webp";
import { EForces } from "@/common/types";

export const rowData = [EForces.CLOSE, EForces.RANGED, EForces.SIEGE];

export const forceIcons = {
  [EForces.SIEGE]: imageSiege,
  [EForces.RANGED]: imageRanged,
  [EForces.CLOSE]: imageSword,
  [EForces.AGILE]: imageAgile,
};
