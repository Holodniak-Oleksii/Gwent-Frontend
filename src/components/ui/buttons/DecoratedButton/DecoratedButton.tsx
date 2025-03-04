import { ButtonHTMLAttributes, FC } from "react";
import styled, { css } from "styled-components";

interface DecoratedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  minWidth?: number;
}

const StyledButton = styled.button<DecoratedButtonProps>`
  ${({ theme, minWidth }) => css`
    ${theme.fontSizes.regular}
    color: ${theme.colors.text};
    border-top: 3px solid ${theme.colors.gold};
    border-bottom: 3px solid ${theme.colors.gold};
    width: fit-content;
    min-width: ${minWidth}px;
    position: relative;
    z-index: 3;
  `}
`;

const ButtonContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 4px 2px;
`;

const ButtonContentBlock = styled.div`
  display: block;
  width: 100%;
  padding: 8px;
  height: 100%;
  line-height: 1;
  ${({ theme }) => css`
    ${theme.fontSizes.regular}
    color: ${theme.colors.text};
    background-color: ${theme.colors.secondary};
    font-weight: 600;
    text-shadow: 0px 0px 2px ${theme.colors.gold};
  `}
`;

const ButtonSide = styled.div`
  position: absolute;
  display: block;
  height: calc(100% + 6px);
  top: 50%;
  z-index: 1;
  aspect-ratio: 1/1;
  padding: 6px;
`;

const ButtonSideContent = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const ButtonSideLeft = styled(ButtonSide)`
  left: 0;
  transform: translateY(-50%) translateX(-50%) rotate(45deg) scale(0.7071);
  border-left: 3px solid ${({ theme }) => theme.colors.gold};
  border-bottom: 3px solid ${({ theme }) => theme.colors.gold};
`;

const ButtonSideRight = styled(ButtonSide)`
  right: 0;
  transform: translateY(-50%) translateX(50%) rotate(45deg) scale(0.7071);
  border-right: 3px solid ${({ theme }) => theme.colors.gold};
  border-top: 3px solid ${({ theme }) => theme.colors.gold};
`;

const ButtonDecor = styled.div`
  position: absolute;
  top: 50%;
  height: 40%;
  aspect-ratio: 1/1;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 4px solid ${({ theme }) => theme.colors.gold};
  z-index: 2;
`;

const ButtonDecorLeft = styled(ButtonDecor)`
  transform: translateY(-50%) translateX(-185%) rotate(45deg);
  left: 0;
`;

const ButtonDecorRight = styled(ButtonDecor)`
  transform: translateY(-50%) translateX(185%) rotate(45deg);
  right: 0;
`;

export const DecoratedButton: FC<DecoratedButtonProps> = ({
  children,
  minWidth = 50,
  ...props
}) => {
  return (
    <StyledButton minWidth={minWidth} {...props}>
      <ButtonSideLeft>
        <ButtonSideContent />
      </ButtonSideLeft>
      <ButtonDecorLeft />
      <ButtonContent>
        <ButtonContentBlock>{children}</ButtonContentBlock>
      </ButtonContent>
      <ButtonDecorRight />
      <ButtonSideRight>
        <ButtonSideContent />
      </ButtonSideRight>
    </StyledButton>
  );
};
