/* eslint-disable @typescript-eslint/no-explicit-any */
import { EFilters } from "@/common/types";
import { ISelectFieldProps } from "@/components/ui/inputs/SelectField/types";
import { ITextFieldProps } from "@/components/ui/inputs/TextFiled/types";
import { Control, UseFormRegister } from "react-hook-form";

export type TFiledType = "input" | "select";

type FieldArgsMap = {
  input: Pick<ITextFieldProps, "label" | "name" | "placeholder" | "type">;
  select: Pick<ISelectFieldProps, "label" | "name" | "placeholder" | "options">;
};

export type IFieldArgs<T extends TFiledType> = FieldArgsMap[T];

export interface IFiledSetting<T, F extends TFiledType> {
  name: keyof T;
  type: F;
  args?: IFieldArgs<F>;
}

export interface IFilterProps<T> {
  fields: IFiledSetting<T, TFiledType>[];
  isLoading?: boolean;
  filterKey: EFilters;
}

export interface ISwitchProps<T> {
  item: IFiledSetting<T, TFiledType>;
  register: UseFormRegister<any>;
  control: Control<any>;
}
