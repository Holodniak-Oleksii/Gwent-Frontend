import { GameManager } from "@/api/ws/game";
import { ArenaScreen } from "@/features/Arena/data";
import { useGameStore } from "@/store/game";
import { useUserStore } from "@/store/user";
import { FC, useMemo } from "react";
import { useParams } from "react-router-dom";

interface IArenaProps {
  nickname: string;
  id: string;
}

const Arena: FC<IArenaProps> = ({ id, nickname }) => {
  const game = useMemo(() => {
    return new GameManager(nickname, id);
  }, [nickname, id]);

  const state = useGameStore((state) => state.state);
  const Component = ArenaScreen[state];

  return <Component game={game} />;
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
