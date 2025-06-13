import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  ${({ theme }) => theme.spacing.content};
`;

export const StyledContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    ${theme.spacing.indents};
    gap: 60px;
    ${theme.media.width.xs} {
      gap: 44px;
    }
  `}
`;

export const StyledList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  max-width: calc(100% - 80px);
  margin: 0 auto;
  ${({ theme }) => css`
    gap: 32px;
    ${theme.media.width.md} {
      gap: 24px;
    }
    ${theme.media.width.sm} {
      max-width: 540px;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
    ${theme.media.width.xxs} {
      grid-template-columns: 100%;
    }
  `}
`;
