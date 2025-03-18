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
    background-color: ${theme.colors.primary};
    border-top: 1px solid ${theme.colors.border};
    ${({ theme }) => theme.common.bgTexture};

    padding-bottom: 160px;
    ${theme.media.width.lg} {
      padding-bottom: 120px;
    }
  `};
`;
