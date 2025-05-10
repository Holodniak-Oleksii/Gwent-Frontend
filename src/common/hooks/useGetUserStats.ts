import { useUserStore } from "@/store/user";
import { formatDate } from "@/utils";

export interface IUserStats {
  nickname: string | undefined;
  avatar: string;
  wins: number;
  losses: number;
  draws: number;
  sum: number;
  winsPercentage: number;
  topPlace: number;
  coins: number;
  createdAt: string;
}

export const useGetUserStats = (): IUserStats => {
  const user = useUserStore((state) => state.user);

  const wins = user?.wins ?? 0;
  const losses = user?.losses ?? 0;
  const draws = user?.draws ?? 0;
  const sum = wins + losses + draws;

  const winsPercentage = sum > 0 ? (wins / sum) * 100 : 0;

  return {
    nickname: user?.nickname,
    avatar: user?.avatar || "",
    wins,
    losses,
    draws,
    sum,
    winsPercentage,
    topPlace: 1,
    coins: user?.coins || 0,
    createdAt: formatDate(new Date()),
  };
};
