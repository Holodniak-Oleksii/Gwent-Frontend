import imageAgile from "@/assets/images/combats/agile.webp";
import imageClose from "@/assets/images/combats/close.webp";
import imageRanged from "@/assets/images/combats/ranged.webp";
import imageSiege from "@/assets/images/combats/siege.webp";

import imageBgAgile from "@/assets/images/combats/bg/agile.webp";
import imageBgClose from "@/assets/images/combats/bg/close.webp";
import imageBgRanged from "@/assets/images/combats/bg/ranged.webp";
import imageBgSiege from "@/assets/images/combats/bg/siege.webp";

import { EForces } from "@/common/types";

interface IScreen {
  icon: string;
  text: string;
  bg: string;
}

export const images = [imageBgClose, imageBgRanged, imageBgSiege, imageBgAgile];

export const rowsData: Record<EForces, IScreen> = {
  [EForces.CLOSE]: {
    icon: imageClose,
    text: "close",
    bg: imageBgClose,
  },
  [EForces.RANGED]: {
    icon: imageRanged,
    text: "ranged",
    bg: imageBgRanged,
  },
  [EForces.SIEGE]: {
    icon: imageSiege,
    text: "siege",
    bg: imageBgSiege,
  },
  [EForces.AGILE]: {
    icon: imageAgile,
    text: "agile",
    bg: imageBgAgile,
  },
};
