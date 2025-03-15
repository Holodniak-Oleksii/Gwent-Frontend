import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { StyledWrapper as Wrapper } from "../../styles";

export const StyledWrapper = styled(Wrapper)`
  position: fixed;
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

export const StyledImageWrapper = styled(motion.div)`
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
`;
