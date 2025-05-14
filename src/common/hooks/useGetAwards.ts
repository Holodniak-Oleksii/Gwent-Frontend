import { AWARDS } from "@/common/constants/awards";
import { EAwards, IUserModel } from "@/common/types";
import { useMemo } from "react";

export const useGetAwards = (user: IUserModel | null) => {
  return useMemo(() => {
    if (!user) return [];

    const userAwards = [];

    const totalGames = user.wins + user.losses + user.draws;
    const winRate = totalGames > 0 ? user.wins / totalGames : 0;

    if (user.coins >= 1000) {
      userAwards.push(AWARDS[EAwards.RICH]);
    }
    if (user.coins >= 10000) {
      userAwards.push(AWARDS[EAwards.PATRON]);
    }
    if (user.coins >= 100000) {
      userAwards.push(AWARDS[EAwards.TREASURER]);
    }

    if (user.wins >= 10) {
      userAwards.push(AWARDS[EAwards.FIGHTER]);
    }
    if (user.wins >= 100) {
      userAwards.push(AWARDS[EAwards.ONE_IN_A_THOUSAND]);
    }

    if (user.draws >= 10) {
      userAwards.push(AWARDS[EAwards.IRON_WILL]);
    }

    if (winRate >= 0.9 && totalGames >= 10) {
      userAwards.push(AWARDS[EAwards.ARENA_LEGEND]);
    } else if (winRate >= 0.5 && totalGames >= 10) {
      userAwards.push(AWARDS[EAwards.STRATEGY_MASTER]);
    }

    return userAwards;
  }, [user]);
};
