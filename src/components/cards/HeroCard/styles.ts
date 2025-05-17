import { BaseButton } from "@/components/ui/buttons/BaseButton";
import styled, { css } from "styled-components";

interface IBuyProps {
  $isBuy?: boolean;
  $isPreview?: boolean;
}

export const StyledWrapper = styled.div`
  width: 100%;
  height: fit-content;
  max-height: 100%;
  aspect-ratio: 20/32;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.bgneonLight};
  `}
`;

export const StyledImage = styled.img<IBuyProps>`
  width: 100%;
  object-fit: cover;
  ${({ $isBuy, theme, $isPreview }) =>
    $isPreview
      ? "height: 100%;"
      : css`
          height: ${$isBuy ? "calc(100% - 112px)" : "calc(100% - 60px)"};
          ${theme.media.width.lg} {
            height: ${$isBuy ? "calc(100% - 108px)" : "calc(100% - 60px)"};
          }
        `}
`;

export const StyledPanel = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  button {
    margin-top: auto;
  }
`;

export const StyledName = styled.span`
  margin: auto;
  ${({ theme }) => css`
    text-align: center;
    ${theme.fontSizes.small};
    color: ${theme.colors.text};
  `}
`;

export const StyledBuyButton = styled(BaseButton)<IBuyProps>`
  width: 100%;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  &:disabled {
    cursor: default;
  }
  ${({ $isBuy }) =>
    $isBuy
      ? `
       svg {
        width: 14px;
        height: 14px;
      }
        `
      : `
      svg {
        width: 16px;
        height: 16px;
      }
    `}
`;
