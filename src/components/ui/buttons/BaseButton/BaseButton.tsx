import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
  forwardRef,
} from "react";
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
  ${({ theme, variant }) => css`
    ${theme.fontSizes.medium}
    width: fit-content;
    position: relative;
    min-width: 140px;
    z-index: 3;
    height: fit-content;
    border: 1px solid ${theme.colors.secondary};
    color: ${theme.colors.text};
    padding: 8px;
    background: ${variant === "fill" ? theme.colors.secondary : "transparent"};
    text-shadow: 0px 0px 2px ${theme.colors.gold};
    ${theme.media.width.lg} {
      min-width: 110px;
    }
  `}
`;

const StyledLink = styled(StyledButton)`
  text-align: center;
`;

export const BaseButton: FC<IBaseButtonProps> = ({
  children,
  variant = "fill",
  ...props
}) => (
  <StyledButton variant={variant} {...props}>
    {children}
  </StyledButton>
);

export const BaseStyledLink = forwardRef<HTMLAnchorElement, ILinkProps>(
  ({ variant = "fill", to, ...props }, ref) => (
    <StyledLink as={Link} to={to} variant={variant} ref={ref} {...props} />
  )
);
