import { FieldError, Merge } from "react-hook-form";
import { TransitionStatus } from "react-transition-group";

export interface IActiveble {
  $isActive: boolean;
}

export interface IOpenable {
  $isOpen: boolean;
}

export interface IOption {
  label: string;
  value: string;
  id: number;
}

export type TErrorForm =
  | FieldError
  | Merge<FieldError, (FieldError | undefined)[]>;
export interface IError {
  error?: TErrorForm;
}

export interface ITransitionsProps {
  $transitionState: TransitionStatus;
}
