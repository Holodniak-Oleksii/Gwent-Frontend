import {
  IFiledSetting,
  TFiledType,
} from "@/components/shared/FilterCreator/types";
import { IFilterFields } from "@/store/filters/types";

export const fields: IFiledSetting<IFilterFields["PLAYERS"], TFiledType>[] = [
  {
    name: "name",
    type: "input",
    args: {
      name: "name",
      label: "Player Name",
      placeholder: "Enter Player Name",
      type: "text",
    },
  },
  {
    name: "raring",
    type: "input",
    args: {
      name: "raring",
      label: "Min Player Raring",
      placeholder: "Enter Min Player Raring",
      type: "number",
      min: 0,
    },
  },
];
