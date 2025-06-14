import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from "react";
import { Link, LinkProps } from "react-router-dom";
import styled, { css } from "styled-components";

interface IBaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "fill" | "outline";
}

interface ILinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    Omit<LinkProps, "to"> {
  to: LinkProps["to"];
  variant?: "fill" | "outline";
}

const StyledButton = styled.button<IBaseButtonProps>`
  width: fit-content;
  position: relative;
  min-width: 140px;
  z-index: 3;
  height: fit-content;
  padding: 8px;
  line-height: 1;
  &:disabled {
    opacity: 0.5;
    cursor: progress;
  }
  ${({ theme, variant }) => css`
    border: 1px solid ${theme.colors.secondary};
    ${theme.fontSizes.medium}
    background: ${variant === "fill" ? theme.colors.secondary : "transparent"};
    color: ${variant === "fill"
      ? theme.colors.primary
      : theme.colors.secondary};
    ${theme.media.width.lg} {
      min-width: 110px;
    }
    ${theme.media.width.sm} {
      min-width: 80px;
    }
  `}
`;

const StyledLink = styled(StyledButton)`
  text-align: center;
`;

export const BaseButton = forwardRef<HTMLButtonElement, IBaseButtonProps>(
  ({ variant = "fill", ...props }, ref) => (
    <StyledButton ref={ref} variant={variant} {...props} />
  )
);

export const BaseStyledLink = forwardRef<HTMLAnchorElement, ILinkProps>(
  ({ variant = "fill", to, ...props }, ref) => (
    <StyledLink as={Link} to={to} variant={variant} ref={ref} {...props} />
  )
);
