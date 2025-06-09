import { IFilterFields } from "./types";

export const DEFAULT_FIELDS: IFilterFields = {
  CARDS: {
    fractions: [],
    abilities: [],
    forces: [],
    types: [],
    name: "",
    page: 1,
    size: 32,
  },
  PLAYERS: {
    name: "",
    rating: 0,
    page: 1,
    size: 18,
  },
};
