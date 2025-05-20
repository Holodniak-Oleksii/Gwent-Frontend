import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => css`
    padding: 44px 16px 16px;
    background-color: ${theme.colors.focus};
    ${theme.media.width.lg} {
      padding: 32px 16px 16px;
    }
  `}
`;
