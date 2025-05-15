import { RANG_IMAGE } from "@/common/constants/rang";
import { IUserStats } from "@/common/hooks/useGetUserStats";
import IconDefeat from "@/common/icons/stats/IconDefeat";
import IconDraws from "@/common/icons/stats/IconDraws";
import IconFight from "@/common/icons/stats/IconFight";
import IconMedal from "@/common/icons/stats/IconMedal";
import IconWins from "@/common/icons/stats/IconWins";
import { IStat } from "../../../../components/cards/StatCard/StatCard";

export const convertStatsToArray = (stats: IUserStats): IStat[] => {
  const Icon = RANG_IMAGE[stats.rang];
  return [
    {
      icon: <IconWins />,
      name: "Wins",
      value: stats.wins,
    },
    {
      icon: <IconDraws />,
      name: "Draws",
      value: stats.draws,
    },
    {
      icon: <IconDefeat />,
      name: "Defeats",
      value: stats.losses,
    },
    {
      icon: <Icon />,
      name: "Rang",
      value: stats.rang + 1,
    },
    {
      icon: <IconFight />,
      name: "Fights",
      value: stats.sum,
    },
    {
      icon: <IconMedal />,
      name: "Rating",
      value: stats.rating,
    },
  ];
};
