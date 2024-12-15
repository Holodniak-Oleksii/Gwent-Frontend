import { forwardRef } from "react";
import { ITextFieldProps } from "./types";

export const TextFiled = forwardRef<HTMLInputElement, ITextFieldProps>(
  (props, ref) => {
    const { error, ...rest } = props;
    return (
      <input
        {...rest}
        ref={ref}
        style={{ border: `1px solid ${error ? "red" : "none"}` }}
      />
    );
  }
);
