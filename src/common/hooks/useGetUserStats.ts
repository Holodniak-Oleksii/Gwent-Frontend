import { IUserModel } from "@/common/types";
import { TPlayer } from "@/common/types/entity";
import { formatDate } from "@/utils";

export interface IUserStats {
  nickname: string | undefined;
  avatar: string;
  wins: number;
  losses: number;
  draws: number;
  sum: number;
  winsPercentage: number;
  rating: number;
  coins: number;
  createdAt: string;
  rang: number;
}

export const useGetUserStats = (
  user: IUserModel | TPlayer | null
): IUserStats => {
  const wins = user?.wins ?? 0;
  const losses = user?.losses ?? 0;
  const draws = user?.draws ?? 0;
  const sum = wins + losses + draws;
  const rating = user?.rating || 0;
  const winsPercentage = +(sum > 0 ? (wins / sum) * 100 : 0).toFixed(0);

  const rang = rating > 5000 ? 1 : rating > 10000 ? 2 : rating > 50000 ? 3 : 0;

  return {
    nickname: user?.nickname,
    avatar: user?.avatar || "",
    wins,
    losses,
    draws,
    sum,
    winsPercentage,
    rating,
    coins: user?.coins || 0,
    createdAt: formatDate(user?.createdAt || ""),
    rang,
  };
};
