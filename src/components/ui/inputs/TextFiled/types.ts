import { FieldError } from "react-hook-form";

export interface ITextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
}
