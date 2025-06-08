import { ECardAbilities, ICardModel } from "@/common/types";
import { create } from "zustand";

interface IBoardStore {
  ability: ECardAbilities | null;
  chooseCard: ICardModel | null;
  setChooseCard: (card: ICardModel | null) => void;
  setAbility: (ability: ECardAbilities | null) => void;
}

export const useBoardStore = create<IBoardStore>((set) => ({
  chooseCard: null,
  ability: null,
  setChooseCard: (chooseCard) => set((state) => ({ ...state, chooseCard })),
  setAbility: (ability) => set((state) => ({ ...state, ability })),
}));
