import imageBackMONSTERS from "@/assets/images/game/deck/monsters.webp";
import imageBackNILFGAARD from "@/assets/images/game/deck/nilfgaard.webp";
import imageBackKINGDOMS_OF_THE_NORTH from "@/assets/images/game/deck/realms.webp";
import imageBackSCOIATAEL from "@/assets/images/game/deck/scoiatael.webp";
import { EFaction } from "@/common/types";

export const cardFraction: Record<EFaction, string> = {
  [EFaction.KINGDOMS_OF_THE_NORTH]: imageBackKINGDOMS_OF_THE_NORTH,
  [EFaction.MONSTERS]: imageBackMONSTERS,
  [EFaction.SCOIATAEL]: imageBackSCOIATAEL,
  [EFaction.NILFGAARD]: imageBackNILFGAARD,
  [EFaction.NEUTRAL]: "",
  [EFaction.WEATHER]: "",
  [EFaction.SPECIAL]: "",
};
