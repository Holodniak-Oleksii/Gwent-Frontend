import { IOpenable } from "@/common/types";
import styled, { css } from "styled-components";

const openState = css`
  .wrapper {
    transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0);
    box-shadow: 2px 35px 20px -8px rgba(0, 0, 0, 0.5);

    &::before,
    &::after {
      opacity: 1;
    }

    &::after {
      height: 120px;
    }
  }
  .character {
    opacity: 1;
    transform: translate3d(0%, -20%, 100px);
  }
  .title {
    transform: translate3d(0%, -50px, 100px);
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  --card-height: 400px;
  --card-width: calc(var(--card-height) / 1.3);
  padding-top: 30px;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 767px) {
    --card-height: 300px;
    padding-top: 16px;
  }
  @media screen and (max-width: 540px) {
    --card-width: calc(var(--card-height) / 1.1);
  }
`;

export const StyledCharacter = styled.img`
  width: 100%;
  opacity: 0;
  transition: all 0.5s;
  position: absolute;
  height: 360px;
  z-index: -1;
  object-fit: contain;
  object-position: bottom;
  @media screen and (max-width: 767px) {
    height: 260px;
  }
`;

export const StyledTitle = styled.div`
  width: 100%;
  filter: drop-shadow(0 0 2px #000);
  transition: transform 0.5s;
  padding: 24px 12px;
  height: fit-content;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.colors.text};
    ${theme.fontSizes.big};
    span {
      ${theme.fontSizes.medium};
      ${theme.common.secondFontFamily};
      color: ${theme.colors.secondary};
    }
  `}
`;

export const StyledContainer = styled.div<IOpenable>`
  width: var(--card-width);
  height: var(--card-height);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  perspective: 2500px;

  @media screen and (hover: hover) {
    &:hover {
      ${openState}
    }
  }
  @media screen and (hover: none) {
    ${({ $isOpen }) => $isOpen && openState}
  }
`;

export const StyledContent = styled.div`
  transition: all 0.5s;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;

  &::before,
  &::after {
    content: "";
    opacity: 0;
    width: 100%;
    height: 80px;
    transition: all 0.5s;
    position: absolute;
    left: 0;
  }
  &::before {
    top: 0;
    height: 100%;
    background-image: linear-gradient(
      to top,
      transparent 46%,
      rgba(12, 13, 19, 0.5) 68%,
      rgba(12, 13, 19) 97%
    );
  }
  &::after {
    bottom: 0;
    opacity: 1;
    background-image: linear-gradient(
      to bottom,
      transparent 46%,
      rgba(12, 13, 19, 0.5) 68%,
      rgba(12, 13, 19) 97%
    );
  }
`;

export const StyledBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
`;
