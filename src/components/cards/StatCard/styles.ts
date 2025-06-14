import { convertHexToRgba } from "@/utils/colorUtil";
import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    width: 100px;
    ${theme.media.width.md} {
      width: 60px;
      margin: auto;
    }
  `}
`;

export const StyledName = styled.span`
  ${({ theme }) => css`
    color: ${convertHexToRgba(theme.colors.text, 0.6)};
    ${theme.fontSizes.small};
    ${theme.common.secondFontFamily};
  `}
`;

export const StyledValue = styled.span`
  margin-top: 8px;
  ${({ theme }) => css`
    color: ${theme.colors.text};
    ${theme.fontSizes.regular};
  `}
`;

export const StyledIcon = styled.div`
  svg {
    height: 100%;
    width: fit-content;
  }
  ${({ theme }) => css`
    height: 40px;
    ${theme.media.width.md} {
      height: 32px;
    }
  `}
`;
