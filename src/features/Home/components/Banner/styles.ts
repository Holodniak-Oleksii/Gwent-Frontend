import styled, { css } from "styled-components";
import { StyledWrapper as Wrapper } from "../../styles";

export const StyledWrapper = styled(Wrapper)`
  position: sticky;
  top: 0;
  left: 0;
  ${({ theme }) => theme.common.bgTexture};
`;

export const StyledContent = styled.div`
  height: 100%;
  flex-grow: 1;
  display: flex;
  ${({ theme }) => css`
    padding: 140px 0;
    ${theme.media.width.lg} {
      padding: 80px 0;
    }
  `};
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
    margin-top: auto;
    margin-bottom: 20px;
    margin-right: 30%;
    height: fit-content;
    ${theme.media.width.lg} {
      margin-right: 24%;
    }
    ${theme.media.width.sm} {
      margin: auto auto 0 auto;
      gap: 8px;
    }
  `};
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
    ${theme.media.width.lg} {
      margin-bottom: 20px;
    }
  `};
`;

export const StyledImageWrapper = styled.div`
  position: relative;
  margin-left: auto;
  width: 30%;
  height: 100%;
  ${({ theme }) => css`
    min-width: 400px;
    max-width: 700px;
    filter: drop-shadow(0px 5px 4px ${theme.colors.secondary});
    ${theme.media.width.sm} {
      min-width: 210px;
    }
  `};
`;

export const StyledHeroes = styled.img`
  width: auto;
  position: absolute;
  bottom: 0;
  ${({ theme }) => css`
    height: calc(100% - 50px);
    right: 60px;
    ${theme.media.width.sm} {
      right: 32px;
      max-width: 500px;
      object-fit: contain;
      object-position: bottom;
    }
  `}
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
`;
