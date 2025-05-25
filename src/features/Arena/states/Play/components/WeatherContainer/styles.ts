import { convertHexToRgba } from "@/utils/colorUtil";
import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledContainer = styled.div`
  height: 80%;
  max-height: 140px;
  width: calc(100% - 24px);
  ${({ theme }) => css`
    border: 5px solid ${convertHexToRgba(theme.colors.text, 0.1)};
    box-shadow: inset 0px 5px 25px ${theme.colors.focus},
      0px 5px 5px ${theme.colors.focus};
  `}
`;
