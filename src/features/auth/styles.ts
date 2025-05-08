import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;
  z-index: 2;
  width: 100%;
`;

export const StyledTitle = styled.span`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 12px;
  ${({ theme }) => css`
    ${theme.fontSizes.large};
    color: ${theme.colors.text};
  `}
`;
