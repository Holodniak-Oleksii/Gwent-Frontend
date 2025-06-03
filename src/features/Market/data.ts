import { ECardAbilities, EFaction, EForces, EType } from "@/common/types";
import {
  IFiledSetting,
  TFiledType,
} from "@/components/shared/FilterCreator/types";
import { IFilterFields } from "@/store/filters/types";
import { convertText } from "@/utils";

export const fields: IFiledSetting<IFilterFields["CARDS"], TFiledType>[] = [
  {
    name: "name",
    type: "input",
    args: {
      name: "name",
      label: "Card Name",
      placeholder: "Enter Card Name",
      type: "text",
    },
  },
  {
    name: "abilities",
    type: "select",
    args: {
      name: "abilities",
      label: "Abilities",
      placeholder: "Choose Abilities",
      options: Object.keys(ECardAbilities).map((value) => ({
        label: convertText(value, "sentence"),
        value,
      })),
    },
  },
  {
    name: "forces",
    type: "select",
    args: {
      name: "forces",
      label: "Forces",
      placeholder: "Choose Forces",
      options: Object.keys(EForces).map((value) => ({
        label: convertText(value, "sentence"),
        value,
      })),
    },
  },
  {
    name: "fractions",
    type: "select",
    args: {
      name: "fractions",
      label: "Fractions",
      placeholder: "Choose Fractions",
      options: Object.keys(EFaction).map((value) => ({
        label: convertText(value, "sentence"),
        value,
      })),
    },
  },
  {
    name: "types",
    type: "select",
    args: {
      name: "types",
      label: "Types",
      placeholder: "Choose Types",
      options: Object.keys(EType).map((value) => ({
        label: convertText(value, "sentence"),
        value,
      })),
    },
  },
];
