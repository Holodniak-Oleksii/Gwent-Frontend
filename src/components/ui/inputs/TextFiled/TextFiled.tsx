import { IError } from "@/common/types";
import { convertHexToRgba } from "@/utils/colorUtil";
import { forwardRef } from "react";
import styled, { css } from "styled-components";
import { IInputProps, IPosition, ITextFieldProps } from "./types";

const StyledInput = styled.input<IError & IInputProps>`
  width: 100%;
  ${({ theme, error, endIcon, startIcon }) => css`
    border: 2px solid
      ${error
        ? theme.colors.error
        : convertHexToRgba(theme.colors.secondary, 0.6)};
    background-color: ${convertHexToRgba(theme.colors.placeholder, 0.4)};
    padding: 10px ${endIcon ? 40 : 16}px 10px ${startIcon ? 40 : 16}px;
    font-family: "HalisGR", sans-serif;
    ${theme.fontSizes.medium};
    outline: none;
    color: ${theme.colors.text};
    &::placeholder {
      color: ${convertHexToRgba(theme.colors.text, 0.6)};
    }
    &:focus {
      border: 2px solid ${error ? theme.colors.error : theme.colors.secondary};
    }
  `}
`;

const StyledBlock = styled.div`
  width: 100%;
  position: relative;
`;

const StyledLabel = styled.label<IError>`
  position: absolute;
  font-family: "HalisGR", sans-serif;
  left: 0;
  width: 100%;
  top: 0;
  transform: translateY(calc(-100% - 2px));
  ${({ theme, error }) => css`
    color: ${error ? theme.colors.error : theme.colors.secondary};
    ${theme.fontSizes.small};
    ${theme.overflow};
    text-shadow: 1px 1px ${theme.colors.focus};
  `}
`;

const StyledError = styled.span`
  position: absolute;
  font-family: "HalisGR", sans-serif;
  left: 0;
  width: 100%;
  bottom: 0;
  transform: translateY(calc(100% + 2px));
  ${({ theme }) => css`
    color: ${theme.colors.error};
    ${theme.fontSizes.small};
    ${theme.overflow};
    text-shadow: 1px 1px ${theme.colors.focus};
  `}
`;

export const Icon = styled.button<IPosition>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  height: 100%;
  aspect-ratio: 1 / 1;
  ${({ position }) => `${position}: 0`};
  transform: translate(0, -50%);
  * {
    display: flex;
    width: fit-content;
    height: fit-content;
  }
  svg {
    path {
      width: 20px;
      height: 20px;
    }
  }
`;

export const TextFiled = forwardRef<HTMLInputElement, ITextFieldProps>(
  (props, ref) => {
    const { error, label, endIcon, startIcon, ...rest } = props;
    return (
      <StyledBlock>
        {!!startIcon && (
          <Icon type={"button"} className="end-icon" position="left">
            {startIcon}
          </Icon>
        )}
        {!!label && <StyledLabel>{label}</StyledLabel>}
        <StyledInput
          {...rest}
          ref={ref}
          error={error}
          endIcon={!!endIcon}
          startIcon={!!startIcon}
        />
        {!!error && <StyledError>{error.message}</StyledError>}
        {!!endIcon && (
          <Icon type={"button"} className="end-icon" position="right">
            {endIcon}
          </Icon>
        )}
      </StyledBlock>
    );
  }
);
