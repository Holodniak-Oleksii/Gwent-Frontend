import { RANG_IMAGE } from "@/common/constants/rang";
import { IUserStats } from "@/common/hooks/useGetUserStats";
import IconDefeat from "@/common/icons/stats/IconDefeat";
import IconDraws from "@/common/icons/stats/IconDraws";
import IconFight from "@/common/icons/stats/IconFight";
import IconMedal from "@/common/icons/stats/IconMedal";
import IconWins from "@/common/icons/stats/IconWins";
import { TFunction } from "i18next";
import { IStat } from "../../../../components/cards/StatCard/StatCard";

export const convertStatsToArray = (
  stats: IUserStats,
  t: TFunction
): IStat[] => {
  const Icon = RANG_IMAGE[stats.rang];
  return [
    {
      icon: <IconWins />,
      name: t("stats.wins"),
      value: stats.wins,
    },
    {
      icon: <IconDraws />,
      name: t("stats.draws"),
      value: stats.draws,
    },
    {
      icon: <IconDefeat />,
      name: t("stats.defeats"),
      value: stats.losses,
    },
    {
      icon: <Icon />,
      name: t("stats.rang"),
      value: stats.rang + 1,
    },
    {
      icon: <IconFight />,
      name: t("stats.fights"),
      value: stats.sum,
    },
    {
      icon: <IconMedal />,
      name: t("stats.rating"),
      value: stats.rating,
    },
  ];
};
