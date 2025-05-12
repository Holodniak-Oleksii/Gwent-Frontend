import { ReactNode } from "react";
import { FieldError } from "react-hook-form";

export interface ITextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  label?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export interface IInputProps {
  startIcon: boolean;
  endIcon: boolean;
}

export interface IPosition {
  position: "left" | "right";
}
