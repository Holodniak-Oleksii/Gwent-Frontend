import { IActiveble } from "@/common/types";
import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 50%);
`;

export const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
`;

export const StyledTextWrapper = styled.div`
  width: 100%;
  position: absolute;
  transition-delay: 0.6s;
  overflow: hidden;
  ${({ theme }) => css`
    top: 20%;
    left: 10%;
    ${theme.media.width.md} {
      top: 8%;
      left: 8%;
    }
    ${theme.media.width.xxs} {
      top: 16px;
      left: 16px;
      width: 175%;
    }
  `}
`;

export const StyledText = styled.div<IActiveble>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.6s ease;
  transition-delay: 0.6s;
  ${({ $isActive }) => css`
    transform: ${$isActive ? "translateY(0)" : "translateY(-100%)"};
    opacity: ${$isActive ? 1 : 0};
  `};
`;

export const StyledTitle = styled.div`
  ${({ theme }) => css`
    ${theme.fontSizes.largeTitle};
    color: ${theme.colors.text};
    ${theme.common.textShadow};
  `}
`;

export const StyledDescription = styled.div`
  ${({ theme }) => css`
    ${theme.fontSizes.regular};
    color: ${theme.colors.text};
    ${theme.common.textShadow};
  `}
`;

export const StyledSlide = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  transition: transform 0.6s ease, opacity 0.6s ease, z-index 0.6s ease;
`;

export const StyledCard = styled.div<IActiveble>`
  width: 140px;
  aspect-ratio: 6/9;
  cursor: pointer;
  position: relative;
  transition-delay: 0.6s;
  opacity: ${({ $isActive }) => ($isActive ? 0 : 1)};
`;

export const StyledList = styled.div`
  position: absolute;
  left: 0;
  bottom: 120px;
  z-index: 3;
  width: calc(100% + 70px);
  transform: translateX(-70px);
  height: 210px;
  overflow: hidden;
`;

export const StyledRelative = styled.div`
  width: 100%;
  position: relative;
  z-index: 3;
  left: -50%;
`;

export const StyledBgImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  object-fit: cover;
  object-position: center 30%;
`;

export const StyledBackImageContainer = styled.div<IActiveble>`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -120px);
  transition: width 0.82s cubic-bezier(0.65, 0, 0.35, 1),
    height 0.75s cubic-bezier(0.65, 0, 0.35, 1),
    transform 0.82s cubic-bezier(0.65, 0, 0.35, 1);
  width: 140px;
  height: 210px;

  ${({ $isActive }) =>
    $isActive
      ? css`
          width: 100%;
          height: 100%;
          transform: translate(-50%, 0);
          transition-delay: 0.6s;
        `
      : css`
          transition-delay: 1.2s;
        `}
`;

export const StyledBackImage = styled.img<IActiveble>`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center 30%;
  transition-delay: ${({ $isActive }) => ($isActive ? 0.6 : 1.2)}s;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
`;
