import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  ${({ theme }) => css`
    ${theme.spacing.indents};
    ${theme.common.bgTexture}
  `}
`;

export const StyledContainer = styled.div`
  ${({ theme }) => theme.spacing.content}
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StyledList = styled.div`
  width: 100%;
  padding-bottom: 40px;
  ${({ theme }) => theme.common.grid};
`;

export const StyledTitle = styled.h2`
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  padding-left: 16px;
  ${({ theme }) => css`
    ${theme.fontSizes.big};
    color: ${theme.colors.text};
  `}
`;

export const StyledDivider = styled.hr`
  width: 100%;
  outline: none;
  border: none;
  ${({ theme }) => css`
    height: 1px;
    background-color: ${theme.colors.secondary};
  `}
`;
