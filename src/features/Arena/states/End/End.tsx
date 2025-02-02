import { useGameStore } from "@/store/game";
import { useUserStore } from "@/store/user";

export const End = () => {
  const gameStore = useGameStore((state) => state.game);
  const user = useUserStore((state) => state.user);

  const result =
    gameStore?.winner === "draw"
      ? "Draw"
      : user?.nickname === gameStore?.winner
      ? "You Win"
      : "You Lose";

  return (
    <div>
      Game End <br />
      {result}
    </div>
  );
};
