import imageMonsters from "@/assets/images/shields/deck_shield_monsters.webp";
import imageNilfgaard from "@/assets/images/shields/deck_shield_nilfgaard.webp";
import imageKingdom from "@/assets/images/shields/deck_shield_realms.webp";
import imageScoiatael from "@/assets/images/shields/deck_shield_scoiatael.webp";

import { EFaction } from "@/common/types";

export const IMAGE_FRACTION: Record<EFaction, string> = {
  [EFaction.KINGDOMS_OF_THE_NORTH]: imageKingdom,
  [EFaction.MONSTERS]: imageMonsters,
  [EFaction.NILFGAARD]: imageNilfgaard,
  [EFaction.SCOIATAEL]: imageScoiatael,
  [EFaction.UNIVERSAL]: "",
};
