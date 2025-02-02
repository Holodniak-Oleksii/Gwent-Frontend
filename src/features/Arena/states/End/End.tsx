import { useGameStore } from "@/store/game";

export const End = () => {
  const gameStore = useGameStore((state) => state.game);
  return (
    <div>
      Game End <br /> Winner: {gameStore?.winner}
    </div>
  );
};
