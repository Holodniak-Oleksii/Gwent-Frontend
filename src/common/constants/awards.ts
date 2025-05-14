import imageArenaLegend from "@/assets/images/awards/arena-legend.webp";
import imageEqualFighter from "@/assets/images/awards/equal-fighter.webp";
import imageFighter from "@/assets/images/awards/fighter.webp";
import imageOneInAThousand from "@/assets/images/awards/one-in-a-thousand.webp";
import imagePatron from "@/assets/images/awards/patron.webp";
import imageRich from "@/assets/images/awards/rich.webp";
import imageStrategyMaster from "@/assets/images/awards/strategy-master.webp";
import imageTreasurer from "@/assets/images/awards/treasurer.webp";
import { EAwards } from "@/common/types";

export const AWARDS = {
  [EAwards.RICH]: {
    icon: imageRich,
    title: "Rich",
    description: "Balance exceeds 10,000 gold coins.",
  },
  [EAwards.PATRON]: {
    icon: imagePatron,
    title: "Patron",
    description: "Balance exceeds 50,000 gold coins. A true supporter.",
  },
  [EAwards.TREASURER]: {
    icon: imageTreasurer,
    title: "Royal Treasurer",
    description: "Collected more than 100,000 coins. Counts every one.",
  },
  [EAwards.ONE_IN_A_THOUSAND]: {
    icon: imageOneInAThousand,
    title: "One in a Thousand",
    description: "Achieved over 100 victories. A true veteran.",
  },
  [EAwards.FIGHTER]: {
    icon: imageFighter,
    title: "Fighter",
    description: "Won 10 battles. The journey begins.",
  },
  [EAwards.IRON_WILL]: {
    icon: imageEqualFighter,
    title: "Equal Fighter",
    description: "10 battles ended in a draw. A perfect balance.",
  },
  [EAwards.ARENA_LEGEND]: {
    icon: imageArenaLegend,
    title: "Arena Legend",
    description: "Win rate over 90%. A nightmare for opponents.",
  },
  [EAwards.STRATEGY_MASTER]: {
    icon: imageStrategyMaster,
    title: "Strategy Master",
    description: "Wins more than half of all battles. A calculating mind.",
  },
};
