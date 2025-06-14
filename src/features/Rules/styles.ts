import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  height: 100svh;
  width: 100%;
  min-height: fit-content;
  ${({ theme }) => css`
    ${theme.spacing.layout};
    ${theme.common.bgTexture}
  `}
`;

export const StyledContainer = styled.div`
  ${({ theme }) => theme.spacing.content}
  width: 100%;
  min-height: fit-content;
  height: 100%;
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
