import { ECardAbilities, EFaction, EForces, EType } from "@/common/types";
import {
  IFiledSetting,
  TFiledType,
} from "@/components/shared/FilterCreator/types";
import { IFilterFields } from "@/store/filters/types";
import { convertText } from "@/utils";
import { TFunction } from "i18next";

export const fields = (
  t: TFunction
): IFiledSetting<IFilterFields["CARDS"], TFiledType>[] => [
  {
    name: "name",
    type: "input",
    args: {
      name: "name",
      label: t("labels.cardName"),
      placeholder: t("placeholders.cardName"),
      type: "text",
    },
  },
  {
    name: "abilities",
    type: "select",
    args: {
      name: "abilities",
      label: t("labels.abilities"),
      placeholder: t("placeholders.chooseAbilities"),
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
      label: t("labels.forces"),
      placeholder: t("placeholders.chooseForces"),
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
      label: t("labels.fractions"),
      placeholder: t("placeholders.chooseFractions"),
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
      label: t("labels.types"),
      placeholder: t("placeholders.chooseTypes"),
      options: Object.keys(EType).map((value) => ({
        label: convertText(value, "sentence"),
        value,
      })),
    },
  },
];
