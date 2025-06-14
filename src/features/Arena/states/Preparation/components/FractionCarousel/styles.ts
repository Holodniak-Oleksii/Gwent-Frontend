import { IActiveble } from "@/common/types";
import styled, { css, RuleSet } from "styled-components";

type TPosition = "left" | "center" | "right" | "hide";

interface ITabProps extends IActiveble {
  $position: TPosition;
}

export const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
  flex-shrink: 0;
  ${({ theme }) => css`
    height: 100px;
    ${theme.media.width.lg} {
      height: 80px;
    ${theme.media.width.md}{
      margin-bottom: 24px;
    }
    ${theme.media.width.xs}{
      margin-bottom: 0;
    }
  `}
`;

const positionStyles: Record<TPosition, RuleSet> = {
  center: css`
    transform: translateX(-50%) translateY(-50%);
  `,
  left: css`
    transform: translateX(-150%) translateY(-50%) scale(0.6);
  `,
  right: css`
    transform: translateX(50%) translateY(-50%) scale(0.6);
  `,
  hide: css`
    transform: translateX(0) translateY(-50%) scale(0);
    opacity: 0;
  `,
};

export const StyledTab = styled.button<ITabProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  transition: all 0.4s linear;
  min-width: 200px;
  ${({ $isActive, $position, theme }) => css`
    opacity: ${$isActive ? 1 : 0.5};
    color: ${theme.colors.text};
    ${theme.fontSizes.medium};
    ${positionStyles[$position]};
    img {
      width: 80px;
      height: 80px;
      object-fit: contain;
    }
    ${theme.media.width.lg} {
      img {
        width: 60px;
        height: 60px;
      }
    }
    ${theme.media.width.xs} {
      min-width: 150px;
      img {
        width: 44px;
        height: 44px;
      }
    }
    ${theme.media.width.xxs} {
      min-width: 120px;
    }
  `}
`;

export const StyledButtonLeft = styled.button`
  padding: 8px;
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 4;
  ${({ theme }) => css`
    transform: translateX(calc(50% - 125px)) translateY(-50%) rotate(-90deg);
    ${theme.media.width.lg} {
      transform: translateX(calc(50% - 140px)) translateY(-50%) rotate(-90deg);
    }
    ${theme.media.width.xs} {
      transform: translateX(calc(50% - 110px)) translateY(-50%) rotate(-90deg);
    }
  `}
`;

export const StyledButtonRight = styled(StyledButtonLeft)`
  ${({ theme }) => css`
    transform: translateX(calc(-50% + 100px)) translateY(-50%) rotate(90deg);
    ${theme.media.width.lg} {
      transform: translateX(calc(-50% + 90px)) translateY(-50%) rotate(90deg);
    }
    ${theme.media.width.xs} {
      transform: translateX(calc(-50% + 70px)) translateY(-50%) rotate(90deg);
    }
  `}
`;
