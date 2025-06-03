import { ReactNode } from "react";
import { FieldError } from "react-hook-form";

export interface ITextFieldProps<T> extends React.InputHTMLAttributes<T> {
  error?: FieldError;
  label?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  as?: React.ElementType;
  rows?: number;
}

export interface IInputProps {
  startIcon: boolean;
  endIcon: boolean;
}

export interface IPosition {
  position: "left" | "right";
}
