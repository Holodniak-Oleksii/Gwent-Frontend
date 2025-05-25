import { IGameContext } from "@/common/contexts/GameContext";
import { createContext, useContext } from "react";

export const GameContext = createContext<IGameContext | undefined>(undefined);

export const useGame = (): IGameContext => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
