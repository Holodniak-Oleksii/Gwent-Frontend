import { EFilters } from "@/common/types";
import { DEFAULT_FIELDS } from "@/store/filters/data";
import { IFilterFields } from "@/store/filters/types";
import { create } from "zustand";

export interface IFilterStore {
  filter: IFilterFields;
  onChange: <T extends EFilters>(key: T, data: IFilterFields[EFilters]) => void;
}

export const useFilterStore = create<IFilterStore>((set) => ({
  filter: DEFAULT_FIELDS,
  onChange: (key, data) => {
    set((state) => ({ filter: { ...state.filter, [key]: data } }));
  },
}));
