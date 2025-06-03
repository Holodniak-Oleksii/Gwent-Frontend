import { useDebounce } from "@/common/hooks/useDebounce";
import { EFilters } from "@/common/types";
import { SelectField } from "@/components/ui/inputs/SelectField/SelectField";
import { TextFiled } from "@/components/ui/inputs/TextFiled";
import { useFilterStore } from "@/store/filters";
import { DEFAULT_FIELDS } from "@/store/filters/data";
import { IFilterFields } from "@/store/filters/types";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { StyledWrapper } from "./styles";
import { IFieldArgs, IFilterProps, ISwitchProps } from "./types";

export const FilterCreator = <T extends object>({
  fields,
  filterKey,
}: IFilterProps<T>) => {
  const { control, register } = useForm<IFilterFields[EFilters]>({
    defaultValues: DEFAULT_FIELDS[filterKey],
  });

  const onFilterChange = useFilterStore((state) => state.onChange);

  const values = useWatch({
    control,
  });

  const debouncedValues = useDebounce(values, 500) as IFilterFields[EFilters];

  useEffect(() => {
    if (debouncedValues) {
      console.log("debouncedValues :", debouncedValues);
      onFilterChange(EFilters[filterKey], debouncedValues);
    }
  }, [debouncedValues, onFilterChange, filterKey]);

  const renderFields = () =>
    fields.map((item, i) => (
      <SwitchFiled key={i} control={control} item={item} register={register} />
    ));

  return <StyledWrapper>{renderFields()}</StyledWrapper>;
};
const SwitchFiled = <T extends object>({ item, register }: ISwitchProps<T>) => {
  switch (item.type) {
    case "input": {
      const args = item.args as IFieldArgs<"input">;
      return (
        <TextFiled
          {...register(args.name!)}
          placeholder={args.placeholder}
          type={args.type}
          label={args.label}
          name={args.name}
        />
      );
    }
    case "select": {
      const args = item.args as IFieldArgs<"select">;
      return (
        <SelectField
          name={args.name}
          label={args.label}
          placeholder={args.placeholder}
          options={args.options}
        />
      );
    }
    default:
      return null;
  }
};
