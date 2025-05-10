import { IUserStats } from "@/common/hooks/useGetUserStats";
import IconDefeat from "@/common/icons/stats/IconDefeat";
import IconDraws from "@/common/icons/stats/IconDraws";
import IconFight from "@/common/icons/stats/IconFight";
import IconMedal from "@/common/icons/stats/IconMedal";
import IconPercent from "@/common/icons/stats/IconPercent";
import IconWins from "@/common/icons/stats/IconWins";
import { IStat } from "../StatCard/StatCard";

export const convertStatsToArray = (stats: IUserStats): IStat[] => [
  {
    icon: <IconFight />,
    name: "Fights",
    value: stats.sum,
    order: 0,
  },
  {
    icon: <IconWins />,
    name: "Wins",
    value: stats.wins,
    order: 1,
  },
  {
    icon: <IconMedal />,
    name: "Rating",
    value: stats.rating,
    order: 2,
  },
  {
    icon: <IconPercent />,
    name: "Percentage of wins",
    value: stats.winsPercentage,
    order: 4,
  },
  {
    icon: <IconDraws />,
    name: "Draws",
    value: stats.draws,
    order: 5,
  },
  {
    icon: <IconDefeat />,
    name: "Defeats",
    value: stats.losses,
    order: 6,
  },
];
