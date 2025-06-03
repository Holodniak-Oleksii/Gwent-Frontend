import { convertHexToRgba } from "@/utils/colorUtil";
import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledTag = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  white-space: nowrap;
  gap: 4px;
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    padding: 4px 8px;
    span {
      ${theme.fontSizes.medium};
      ${theme.common.secondFontFamily};
      color: ${theme.colors.primary};
    }
  `}
`;

export const StyledTags = styled.div`
  width: fit-content;
  height: 100%;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
`;

export const StyledList = styled.div`
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
  height: 40px;
  padding: 6px 0;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  ${({ theme }) => css`
    border: 2px solid ${convertHexToRgba(theme.colors.secondary, 0.6)};
    background-color: ${convertHexToRgba(theme.colors.placeholder, 0.4)};
    & > div {
      ${theme.fontSizes.medium};
      ${theme.common.secondFontFamily};
      color: ${convertHexToRgba(theme.colors.text, 0.6)};
    }
  `}
`;

export const StyledPortal = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: 300px;
  overflow: hidden;
  overflow-y: auto;
  z-index: 100;
  transform: translateY(calc(100% + 8px));
  display: flex;
  flex-direction: column;
  ${({ theme }) => css`
    box-shadow: 0px 0px 10px ${theme.colors.focus};
    background-color: ${theme.colors.primary};
  `}
`;

export const StyledIcon = styled.button`
  height: 100%;
  svg {
    height: 100%;
    width: fit-content;
  }
`;

export const StyledItem = styled.div`
  padding: 12px 16px;
  ${({ theme }) => css`
    ${theme.fontSizes.medium};
    ${theme.common.secondFontFamily};
    color: ${theme.colors.text};
    ${theme.common.textShadow};
    transition: all 0.3s ease;
    background-color: ${convertHexToRgba(theme.colors.secondary, 0)};
    cursor: pointer;

    @media (hover: hover) {
      &:hover {
        background-color: ${convertHexToRgba(theme.colors.secondary, 0.1)};
      }
    }
  `}
`;

export const StyledLabel = styled.label`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(calc(-100% - 2px));
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    ${theme.fontSizes.small};
    ${theme.overflow};
    text-shadow: 1px 1px 2px ${theme.colors.focus};
  `}
`;
