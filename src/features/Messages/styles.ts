import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  ${({ theme }) => theme.spacing.indents};
`;

export const StyledContainer = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  ${({ theme }) => theme.spacing.content};
`;

export const StyledEmpty = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  min-height: 240px;
  ${({ theme }) => css`
    ${theme.fontSizes.regular};
    color: ${theme.colors.text};
    background-color: ${theme.colors.primary};
  `};
`;
