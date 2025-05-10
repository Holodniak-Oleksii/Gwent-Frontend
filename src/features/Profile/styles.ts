import { IActiveble } from "@/common/types/common";
import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  ${({ theme }) => css`
    ${theme.common.bgTexture};
  `};
`;

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  ${({ theme }) => css`
    ${theme.spacing.content};
  `};
`;

export const StyledList = styled.div`
  padding: 32px 0;
  ${({ theme }) => css`
    ${theme.common.grid};
  `};
`;

export const StyledTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const StyledActiveTab = styled.button<IActiveble>`
  padding: 8px 16px;
  ${({ theme, $isActive }) => css`
    ${theme.fontSizes.medium};
    ${theme.common.secondFontFamily};
    color: ${theme.colors.text};
    border-bottom: 1px solid ${theme.colors.secondary};
    background-color: ${$isActive
      ? theme.colors.secondary
      : theme.colors.bgneonLight};
  `};
`;
