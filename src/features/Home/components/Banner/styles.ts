import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100svh;
  position: relative;
  display: flex;
  overflow: hidden;
  ${({ theme }) => css`
    max-height: 960px;
    min-height: 768px;
    ${theme.media.width.lg} {
      max-height: 768px;
      min-height: 640px;
    }
    ${theme.media.width.md} {
      max-height: 640px;
      min-height: 540px;
    }
    ${theme.media.width.sm} {
      max-height: 710px;
      min-height: 660px;
    }
    ${theme.media.width.xxs} {
      max-height: 800px;
      min-height: 708px;
    }
  `}
`;

export const StyledContent = styled.div`
  height: 100%;
  flex-grow: 1;
  padding: 100px 0;
  display: flex;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  ${({ theme }) => css`
    ${theme.spacing.content};
  `};
  margin-top: auto;
  margin-bottom: 20px;
  margin-right: 30%;
  height: fit-content;
`;

export const StyledTitle = styled.h1`
  text-align: center;
  ${({ theme }) => css`
    ${theme.fontSizes.extra};
    color: ${theme.colors.secondary};
    text-shadow: 2px 0 #f1ca64, -2px 0 #f1ca64, 0 2px #f1ca64, 0 -2px #f1ca64,
      1px 1px #f1ca64, -1px -1px #f1ca64, -1px 1px #f1ca64, 1px -1px #f1ca64;
  `};
`;

export const StyledSubTitle = styled.p`
  text-align: center;
  max-width: 600px;
  margin-bottom: 40px;
  ${({ theme }) => css`
    ${theme.fontSizes.big};
    color: ${theme.colors.text};
    font-family: "Gwent", sans-serif;
  `};
`;

export const StyledImageWrapper = styled.div`
  position: relative;
  margin-left: auto;
  width: 30%;
  min-width: 400px;
  max-width: 700px;
  height: 100%;
  filter: drop-shadow(0px 5px 4px ${({ theme }) => theme.colors.secondary});
`;

export const StyledHeroes = styled.img`
  height: calc(100% - 50px);
  width: auto;
  position: absolute;
  bottom: 0;
  right: 60px;
`;

export const StyledButtonContainer = styled.div`
  position: relative;
`;

export const StyledButtonEffects = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  align-items: center;
  .shadow-container {
    &:last-child {
      transform: translateX(-35%);
    }
    &:first-child {
      transform: rotateX(180deg) rotateZ(180deg) translateX(-35%);
    }
  }
`;
