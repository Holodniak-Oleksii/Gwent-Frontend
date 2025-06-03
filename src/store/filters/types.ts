import { EFilters, IOption } from "@/common/types";

export interface IFilterFields {
  [EFilters.CARDS]: {
    name: string;
    forces: IOption[];
    fractions: IOption[];
    abilities: IOption[];
    types: IOption[];
    page: number;
    size: number;
  };
  [EFilters.PLAYERS]: {
    name: string;
    raring: number;
    page: number;
    size: number;
  };
}
