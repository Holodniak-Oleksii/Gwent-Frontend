import { forwardRef } from "react";
import {
  Icon,
  StyledBlock,
  StyledError,
  StyledInput,
  StyledLabel,
} from "./styles";
import { ITextFieldProps } from "./types";

export const TextField = forwardRef(
  <T extends HTMLElement = HTMLInputElement>(
    props: ITextFieldProps<T>,
    ref: React.Ref<T>
  ) => {
    const { error, label, endIcon, startIcon, as = "input", ...rest } = props;

    return (
      <StyledBlock>
        {!!startIcon && (
          <Icon
            error={error}
            type="button"
            className="end-icon"
            position="left"
          >
            {startIcon}
          </Icon>
        )}
        {!!label && <StyledLabel error={error}>{label}</StyledLabel>}

        <StyledInput
          as={as}
          {...rest}
          ref={ref}
          error={error}
          endIcon={!!endIcon}
          startIcon={!!startIcon}
        />

        {!!error && <StyledError>{error.message}</StyledError>}

        {!!endIcon && (
          <Icon
            error={error}
            type="button"
            className="end-icon"
            position="right"
          >
            {endIcon}
          </Icon>
        )}
      </StyledBlock>
    );
  }
) as <T extends HTMLElement = HTMLInputElement>(
  props: ITextFieldProps<T> & { ref?: React.Ref<T> }
) => JSX.Element;

export const AreaField = forwardRef<
  HTMLTextAreaElement,
  ITextFieldProps<HTMLTextAreaElement>
>((props, ref) => <TextField {...props} as="textarea" ref={ref} />);
