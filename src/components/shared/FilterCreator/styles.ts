import { convertHexToRgba } from "@/utils/colorUtil";
import styled, { css } from "styled-components";

export const StyledWrapper = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 32px 16px;
  padding: 32px 16px 16px;
  flex-wrap: wrap;
  border-radius: 4px;
  & > div {
    flex-grow: 0;
    flex-shrink: 0;
    width: calc((100% - 16px * 4) / 5);
  }
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border: 1px solid ${convertHexToRgba(theme.colors.secondary, 0.1)};
  `}
`;
