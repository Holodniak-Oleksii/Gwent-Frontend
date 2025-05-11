import { convertHexToRgba } from "@/utils/colorUtil";
import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  height: 40px;
  svg {
    height: 100%;
    width: fit-content;
  }
`;
