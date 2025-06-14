import styled, { css } from "styled-components";

export const StyledGrid = styled.div`
  display: grid;
  gap: 32px;
  ${({ theme }) => css`
    padding: 32px 0;
    grid-template-columns: repeat(5, 1fr);
    ${theme.media.width.xlg} {
      grid-template-columns: repeat(4, 1fr);
    }
    ${theme.media.width.lg} {
      grid-template-columns: repeat(3, 1fr);
    }
    ${theme.media.width.md} {
      grid-template-columns: repeat(2, 1fr);
    }
    ${theme.media.width.xs} {
      padding: 16px 0;
      grid-template-columns: repeat(1, 1fr);
    }
  `};
`;

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${({ theme }) => css`
    ${theme.spacing.layout};
  `};
`;

export const StyledWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: 100svh;
  ${({ theme }) => css`
    ${theme.spacing.content};
    ${theme.common.bgTexture};
  `};
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
