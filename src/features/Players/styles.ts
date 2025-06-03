import styled, { css } from "styled-components";

export const StyledGrid = styled.div`
  display: grid;
  gap: 32px;
  ${({ theme }) => css`
    grid-template-columns: repeat(4, 1fr);
    ${theme.media.width.lg} {
      grid-template-columns: repeat(3, 1fr);
    }
  `};
`;

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  ${({ theme }) => css`
    ${theme.spacing.indents};
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
