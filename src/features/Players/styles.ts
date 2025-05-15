import styled, { css } from "styled-components";

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-top: 16px;
  ${({ theme }) => theme.spacing.indents};
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
