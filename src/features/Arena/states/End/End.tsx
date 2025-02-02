import { useGameStore } from "@/store/game";
import { useUserStore } from "@/store/user";

export const End = () => {
  const gameStore = useGameStore((state) => state.game);
  const user = useUserStore((state) => state.user);
  return (
    <div>
      Game End <br />
      You {user?.nickname === gameStore?.winner ? "Win" : "Lose"}
    </div>
  );
};
