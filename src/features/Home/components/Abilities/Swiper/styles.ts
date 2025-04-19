import { IActiveble } from "@/common/types";
import styled, { css } from "styled-components";

interface ISlidePropsStyled extends IActiveble {
  index: number;
}

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

export const StyledSlide = styled.div<ISlidePropsStyled>`
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.6s ease;
  ${({ index, $isActive }) => css`
    transform: translateX(calc(${index} * 150px));
    opacity: ${$isActive ? 0 : 1};
  `}
`;

export const StyledCard = styled.div`
  background-color: green;
  width: 140px;
  aspect-ratio: 6/9;
  cursor: pointer;
  position: relative;
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
`;

export const StyledBgImage = styled.img`
  border: 3px solid #000;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  object-fit: cover;
`;

export const StyledBackImageContainer = styled.div<IActiveble>`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -120px);
  transition: width 0.82s cubic-bezier(0.65, 0, 0.35, 1),
    height 0.75s cubic-bezier(0.65, 0, 0.35, 1),
    transform 0.82s cubic-bezier(0.65, 0, 0.35, 1);
  border: 3px solid red;

  width: 140px;
  height: 210px;

  ${({ $isActive }) =>
    $isActive
      ? css`
          z-index: 1;
          opacity: 1;
          width: 100%;
          height: 100%;
          transform: translate(-50%, 0);
        `
      : css`
          opacity: 0;
          z-index: -1;
        `}
`;

export const StyledBackImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;
