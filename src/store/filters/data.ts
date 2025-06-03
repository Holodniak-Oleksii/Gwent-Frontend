import { IFilterFields } from "./types";

export const DEFAULT_FIELDS: IFilterFields = {
  CARDS: {
    fractions: [],
    abilities: [],
    forces: [],
    types: [],
    name: "",
    page: 1,
    size: 18,
  },
  PLAYERS: {
    page: 1,
    size: 18,
  },
};
