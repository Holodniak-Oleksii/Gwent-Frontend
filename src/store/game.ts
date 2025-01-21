import { EGameState, IGameModel } from "@/common/types";
import { create } from "zustand";

interface INotificationsStore {
  game: IGameModel | null;
  state: EGameState;
}

export const useGameStore = create<INotificationsStore>((set) => ({
  game: null,
  state: EGameState.LOADING,
}));
