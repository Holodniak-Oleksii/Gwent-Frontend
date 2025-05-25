import { GameProvider } from "@/common/contexts/GameContext";
import { ArenaScreen } from "@/features/Arena/data";
import { useGameStore } from "@/store/game";
import { useUserStore } from "@/store/user";
import { FC } from "react";
import { useParams } from "react-router-dom";

interface IArenaProps {
  nickname: string;
  id: string;
}

const Arena: FC<IArenaProps> = ({ id, nickname }) => {
  const state = useGameStore((state) => state.state);
  const Component = ArenaScreen[state];

  return (
    <GameProvider id={id} nickname={nickname}>
      <Component />
    </GameProvider>
  );
};

const QueryCheck = () => {
  const { id } = useParams();
  const user = useUserStore((state) => state.user);

  if (!id || !user?.nickname) {
    return null;
  }
  return <Arena id={id} nickname={user.nickname} />;
};

export default QueryCheck;
