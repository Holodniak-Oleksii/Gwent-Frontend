import { IFilterFields } from "./types";

export const DEFAULT_FIELDS: IFilterFields = {
  CARDS: {
    ability: [],
    force: [],
    fraction: [],
    name: "",
    page: 1,
    size: 18,
    type: [],
  },
  PLAYERS: {
    page: 1,
    size: 18,
  },
};
