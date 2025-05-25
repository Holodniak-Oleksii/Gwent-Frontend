import { GameManager } from "@/api/ws/game";
import { GameContext } from "@/common/hooks/useGame";
import { FC, PropsWithChildren, useMemo } from "react";

export interface IGameContext {
  game: GameManager;
}

interface IGameProviderProps extends PropsWithChildren {
  nickname: string;
  id: string;
}

export const GameProvider: FC<IGameProviderProps> = ({
  children,
  id,
  nickname,
}) => {
  const game = useMemo(() => new GameManager(nickname, id), [nickname, id]);

  return (
    <GameContext.Provider value={{ game }}>{children}</GameContext.Provider>
  );
};
