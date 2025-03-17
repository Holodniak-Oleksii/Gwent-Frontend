import { EFaction } from "@/common/types";
import styled from "styled-components";

interface IColorScheme {
  type: EFaction;
}

const colors = {
  [EFaction.KINGDOMS_OF_THE_NORTH]: "#2571ff",
  [EFaction.MONSTERS]: "#e40606",
  [EFaction.NILFGAARD]: "#ffe100",
  [EFaction.UNIVERSAL]: "#ffe100",
  [EFaction.SCOIATAEL]: "#00ff26",
};

export const StyledWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
  aspect-ratio: 6 / 9;
  min-height: 400px;
  max-height: calc(100vh - 120px);
  background: ${({ theme }) => theme.colors.bgneon};
  padding: 4px;
  border-radius: 4px;
  @media (hover: hover) {
    &:hover {
      .expanded {
        transform: rotate(0);
        opacity: 1;
        & > div {
          transform: rotate(0);
        }
      }
      .collapsed {
        opacity: 0.4;
      }
    }
  }
`;

export const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  border: 4px solid ${({ theme }) => theme.colors.bgneonLight};
  overflow: hidden;
  border-radius: 4px;
  position: relative;
`;

const StyledRelative = styled.div`
  width: 100%;
  height: 100%;
  transform: rotate(-33.2deg);
  transition: transform 0.4s ease-in;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const StyledHeroesRelative = styled(StyledRelative)`
  transform-origin: top right;
  z-index: 2;
`;

export const StyledBackRelative = styled(StyledRelative)`
  transform-origin: bottom left;
  z-index: 1;
  transform: translateY(20%) translateX(10%) scale(1.15) rotate(-33.2deg);
`;

const StyledRotate = styled.div<IColorScheme>`
  position: absolute;
  transition: all 0.4s ease-in;
  height: 120%;
  aspect-ratio: 6 / 9;
  overflow: hidden;
`;

export const StyledHeroRotate = styled(StyledRotate)`
  top: 0;
  right: 0;
  transform-origin: top right;
  transform: rotate(33.2deg);
  z-index: 2;
  opacity: 0.4;
`;

export const StyledCardRotate = styled(StyledRotate)`
  bottom: 0;
  left: 0;
  transform-origin: bottom left;
  transform: rotate(33.2deg);
  z-index: 1;
  opacity: 1;
`;

const StyledAngles = styled.div`
  width: 100%;
  left: 0;
  position: absolute;
  display: flex;
  justify-content: space-between;
  &::before,
  &::after {
    content: "";
    width: 16px;
    height: 16px;
  }
`;

export const StyledAnglesTop = styled(StyledAngles)<IColorScheme>`
  top: 0px;
  &::before {
    border-top: 1px solid ${({ type }) => colors[type]};
    border-left: 1px solid ${({ type }) => colors[type]};
    border-top-left-radius: 4px;
  }
  &::after {
    border-top: 1px solid ${({ type }) => colors[type]};
    border-right: 1px solid ${({ type }) => colors[type]};
    border-top-right-radius: 4px;
  }
`;

export const StyledAnglesBottom = styled(StyledAngles)<IColorScheme>`
  bottom: 0px;
  &::before {
    border-bottom: 1px solid ${({ type }) => colors[type]};
    border-left: 1px solid ${({ type }) => colors[type]};
    border-bottom-left-radius: 4px;
  }
  &::after {
    border-bottom: 1px solid ${({ type }) => colors[type]};
    border-right: 1px solid ${({ type }) => colors[type]};
    border-bottom-right-radius: 4px;
  }
`;
