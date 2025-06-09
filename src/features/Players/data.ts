import {
  IFiledSetting,
  TFiledType,
} from "@/components/shared/FilterCreator/types";
import { IFilterFields } from "@/store/filters/types";
import { TFunction } from "i18next";

export const fields = (
  t: TFunction
): IFiledSetting<IFilterFields["PLAYERS"], TFiledType>[] => [
  {
    name: "name",
    type: "input",
    args: {
      name: "name",
      label: t("labels.playerName"),
      placeholder: t("placeholders.enterPlayerName"),
      type: "text",
    },
  },
  {
    name: "rating",
    type: "input",
    args: {
      name: "rating",
      label: t("labels.minPlayerRating"),
      placeholder: t("placeholders.enterMinPlayerRating"),
      type: "number",
      min: 0,
    },
  },
];
