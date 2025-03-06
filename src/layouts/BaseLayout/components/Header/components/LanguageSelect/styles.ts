import { IOpenable } from "@/common/types";
import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;

  height: fit-content;
  width: fit-content;

  svg {
    height: 24px;
    width: auto;
  }
`;

export const StyledList = styled.div<IOpenable>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(47, 50, 56, 0.8);
  border-bottom: 1px solid rgba(223, 228, 248, 0.087);
  transition: all 0.3s linear;

  ${({ $isOpen }) =>
    $isOpen
      ? css`
          transform: translateY(calc(100% + 12px));
        `
      : css`
          transform: translateY(calc(100% + 4px));
          opacity: 0;
          pointer-events: none;
        `}
`;
export const StyledAction = styled.button`
  padding: 10px 12px;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    color: ${theme.colors.text};
    ${theme.fontSizes.medium}
  `}
`;

export const StyledItem = styled(StyledAction)`
  transition: all 0.3s linear;

  @media (hover: hover) {
    &:hover {
      background-color: rgba(72, 77, 85, 1);
    }
  }
`;
