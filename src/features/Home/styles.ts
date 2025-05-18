import styled, { css } from "styled-components";

export const StyledWrapper = styled.section`
  width: 100%;
  height: 100svh;
  position: relative;
  display: flex;
  overflow: hidden;
  ${({ theme }) => `
    max-height: 960px;
    min-height: 768px;
    ${theme.media.width.lg} {
      max-height: 768px;
      min-height: 640px;
    }
    ${theme.media.width.md} {
      max-height: 640px;
      min-height: 540px;
    }
    ${theme.media.width.sm} {
      max-height: 710px;
      min-height: 660px;
    }
    ${theme.media.width.xxs} {
      max-height: 800px;
      min-height: 708px;
    }
  `}
`;

export const StyledOverlay = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  z-index: 2;
  ${({ theme }) => css`
    ${({ theme }) => theme.common.bgTexture};
    background-color: ${theme.colors.primary};
    border-top: 1px solid ${theme.colors.border};
  `};
`;

export const StyledTitle = styled.div`
  text-align: left;
  align-items: center;
  ${({ theme }) => `
    ${theme.fontSizes.large};
    color: ${theme.colors.text};

    span {
      color: ${theme.colors.secondary};
    }
  `};
`;
