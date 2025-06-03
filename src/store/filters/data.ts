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
    name: "",
    raring: 0,
    page: 1,
    size: 18,
  },
};
