import { useUserStore } from "@/store/user";
import { formatDate } from "@/utils";

export interface IUserStats {
  nickname: string | undefined;
  avatar: string;
  wins: number;
  losses: number;
  draws: number;
  sum: number;
  winsPercentage: string;
  rating: number;
  coins: number;
  createdAt: string;
}

export const useGetUserStats = (): IUserStats => {
  const user = useUserStore((state) => state.user);

  const wins = user?.wins ?? 0;
  const losses = user?.losses ?? 0;
  const draws = user?.draws ?? 0;
  const sum = wins + losses + draws;

  const winsPercentage = (sum > 0 ? (wins / sum) * 100 : 0).toFixed(2);

  return {
    nickname: user?.nickname,
    avatar: user?.avatar || "",
    wins,
    losses,
    draws,
    sum,
    winsPercentage,
    rating: user?.rating || 0,
    coins: user?.coins || 0,
    createdAt: formatDate(user?.createdAt || ""),
  };
};
