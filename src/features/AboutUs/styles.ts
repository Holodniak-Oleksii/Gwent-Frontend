import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  height: 100svh;
  width: 100%;
  min-height: fit-content;
  ${({ theme }) => css`
    ${theme.spacing.indents};
    ${theme.common.bgTexture}
  `}
`;

export const StyledContainer = styled.div`
  ${({ theme }) => theme.spacing.content}
  width: 100%;
  height: 100%;
  min-height: fit-content;

  gap: 32px;
`;

export const StyledCardWrapper = styled.div`
  width: fit-content;
  float: left;
  margin: 0 44px 44px 0;
`;

export const StyledText = styled.div`
  padding-top: 20px;
  ${({ theme }) => css`
    * {
      color: ${theme.colors.text};
    }
    h1 {
      ${theme.fontSizes.big}
    }
    b,
    strong {
      color: ${theme.colors.secondary};
    }

    ul {
      transform: translateX(24px);
    }

    li {
      padding: 6px 0px 6px 0px;
    }
    p {
      padding: 12px;
    }
  `}
`;
