export type TOperation = "set" | "unset";
export interface IStats {
  totalCardsInDeck: number;
  numberOfUnitCards: number;
  specialCards: number;
  totalUnitCardStrength: number;
  heroCards: number;
}
