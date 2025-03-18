import imageNorth from "@/assets/images/fractions/1.webp";
import imageMonsters from "@/assets/images/fractions/2.webp";
import imageScoiatael from "@/assets/images/fractions/3.webp";
import imageNilfgaard from "@/assets/images/fractions/4.webp";

import imageMonstersBack from "@/assets/images/fractions/monsters.webp";
import imageNilfgaardBack from "@/assets/images/fractions/nilfgaard.webp";
import imageNorthBack from "@/assets/images/fractions/realms.webp";
import imageScoiataelBack from "@/assets/images/fractions/scoiatael.webp";

import { EFaction } from "@/common/types";
import { IFractionCard } from "./types";

export const fractionCardList: IFractionCard[] = [
  {
    id: 0,
    imageFront: imageNorth,
    imageBack: imageNorthBack,
    type: EFaction.KINGDOMS_OF_THE_NORTH,
    title: "fraction.northern.title",
    description: "fraction.northern.description",
  },
  {
    id: 1,
    imageFront: imageMonsters,
    imageBack: imageMonstersBack,
    type: EFaction.MONSTERS,
    title: "fraction.monsters.title",
    description: "fraction.monsters.description",
  },

  {
    id: 2,
    imageFront: imageScoiatael,
    imageBack: imageScoiataelBack,
    type: EFaction.SCOIATAEL,
    title: "fraction.scoiatael.title",
    description: "fraction.scoiatael.description",
  },

  {
    id: 3,
    imageFront: imageNilfgaard,
    imageBack: imageNilfgaardBack,
    type: EFaction.NILFGAARD,
    title: "fraction.nilfgaard.title",
    description: "fraction.nilfgaard.description",
  },
];
