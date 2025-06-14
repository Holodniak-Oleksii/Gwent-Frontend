import { EFaction, ICardModel } from "@/common/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PreparationState {
  chooseCards: Record<EFaction, ICardModel[]>;
  setCard: (faction: EFaction, card: ICardModel) => void;
  unsetCard: (faction: EFaction, cardId: string) => void;
}

const defaultState: Record<EFaction, ICardModel[]> = {
  [EFaction.KINGDOMS_OF_THE_NORTH]: [],
  [EFaction.MONSTERS]: [],
  [EFaction.NILFGAARD]: [],
  [EFaction.SCOIATAEL]: [],
  [EFaction.NEUTRAL]: [],
  [EFaction.SPECIAL]: [],
  [EFaction.WEATHER]: [],
};

export const usePreparationStore = create<PreparationState>()(
  persist(
    (set) => ({
      chooseCards: defaultState,
      setCard: (faction, card) =>
        set((state) => ({
          chooseCards: {
            ...state.chooseCards,
            [faction]: [card, ...state.chooseCards[faction]],
          },
        })),
      unsetCard: (faction, cardId) =>
        set((state) => ({
          chooseCards: {
            ...state.chooseCards,
            [faction]: state.chooseCards[faction].filter(
              (c) => c._id !== cardId
            ),
          },
        })),
    }),
    {
      name: "preparation-storage",
    }
  )
);
