import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  padding: 16px;
  display: grid;
  flex-grow: 1;
  ${({ theme }) => css`
    grid-template-columns: calc(50% - 200px) 400px calc(50% - 200px);
    ${theme.media.width.md} {
      grid-template-columns: calc(50% - 100px) 200px calc(50% - 100px);
      padding: 16px 0 0;
    }
    ${theme.media.width.sm} {
      grid-template-columns: calc(50% - 75px) 150px calc(50% - 75px);
    }
    ${theme.media.width.xs} {
      justify-content: space-between;
      grid-template-columns: repeat(2, calc(50% - 8px));
      position: relative;
      padding: 336px 0 0 0;
      min-height: 800px;
    }
  `}
`;
