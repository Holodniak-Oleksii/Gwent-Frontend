import { IActiveble } from "@/common/types";
import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  ${({ theme }) => css`
    ${theme.spacing.content}
  `};
`;

export const StyledContent = styled.div`
  width: 100%;
  display: grid;
  gap: 48px;
  align-items: center;
  grid-template-columns: 45% 1fr;
  ${({ theme }) => css`
    ${theme.spacing.indents}
  `}
`;

export const StyledTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 100%;
`;

export const StyledLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  &::before {
    content: "";
    flex-grow: 1;
    height: 1px;
  }
  ${({ theme }) => css`
    ${theme.fontSizes.medium};
    color: ${theme.colors.text};
    &::before {
      content: "";
      flex-grow: 1;
      background-color: ${theme.colors.secondary};
    }
    span {
      color: ${theme.colors.secondary};
    }
  `}
`;

export const StyledImageContainer = styled.div`
  width: 100%;
  position: relative;
  aspect-ratio: 3 / 2;
  filter: drop-shadow(0px 0px 8px ${({ theme }) => theme.colors.secondary});
`;

export const StyledImage = styled.img<IActiveble & { $isPrevious: boolean }>`
  height: 100%;
  width: 100%;
  object-fit: cover;
  clip-path: polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 15% 100%, 0% 85%);
  position: absolute;
  top: 0;
  left: 0;
  transition: all 1s ease-in;
  ${({ $isActive, $isPrevious }) => css`
    opacity: ${$isActive ? 1 : $isPrevious ? 1 : 0};
    z-index: ${$isActive ? 1 : 0};
  `}
`;

export const StyledContentImage = styled.div`
  position: relative;
  border: 3px solid transparent;
  width: 100%;
  height: 100%;
  clip-path: polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 15% 100%, 0% 85%);
  ${({ theme }) => `background-color: ${theme.colors.secondary}`}
`;

export const StyledTitle = styled.h3`
  ${({ theme }) => theme.fontSizes.big};
  margin-bottom: 16px;
  ${({ theme }) => `color: ${theme.colors.secondary}`}
`;

export const StyledText = styled.p`
  ${({ theme }) => theme.fontSizes.medium};
`;

export const StyledGhostText = styled(StyledTexts)`
  opacity: 0;
`;

export const StyledTabList = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const StyledTabContent = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledParagraph = styled(StyledTexts)<IActiveble>`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.4s ease-in;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
`;

export const StyledTab = styled.button<IActiveble>`
  ${({ theme }) => theme.fontSizes.big};
  ${({ theme }) => `color: ${theme.colors.text}`};
  display: flex;
  gap: 12px;
  align-items: center;
  line-height: 1;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    transition: all 0.3s linear;
    aspect-ratio: 1/1;
    background: ${({ theme }) => theme.colors.text};
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    left: 5.5px;
    height: 8px;
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  }
  &::before {
    content: "";
    height: 14px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.colors.text};
  }
`;
