import imageTotalCardsInDeck from "@/assets/images/stats/deck_stats_count.webp";
import imageHeroCards from "@/assets/images/stats/deck_stats_hero.webp";
import imageSpecialCards from "@/assets/images/stats/deck_stats_special.webp";
import imageTotalUnitCardStrength from "@/assets/images/stats/deck_stats_strength.webp";
import imageNumberOfUnitCards from "@/assets/images/stats/deck_stats_unit.webp";
import { IStats } from "../../types";

interface ILabel {
  key: keyof IStats;
  image: string;
}

export const LABELS: ILabel[] = [
  {
    key: "totalCardsInDeck",
    image: imageTotalCardsInDeck,
  },
  {
    key: "numberOfUnitCards",
    image: imageNumberOfUnitCards,
  },
  {
    key: "specialCards",
    image: imageSpecialCards,
  },
  {
    key: "totalUnitCardStrength",
    image: imageTotalUnitCardStrength,
  },
  {
    key: "heroCards",
    image: imageHeroCards,
  },
];
