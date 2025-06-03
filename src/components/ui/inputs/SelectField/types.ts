import { IError, IOption } from "@/common/types";

export interface ISelectFieldProps extends IError {
  name?: string;
  label?: string;
  placeholder?: string;
  options: IOption[];
}
