import styled, { css } from "styled-components";

export const StyledContent = styled.form`
  padding: 16px;
  width: 100%;
  max-width: 332px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  gap: 12px;
`;

export const StyledZoom = styled.input`
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  ${({ theme }) => css`
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 10px;
      height: 10px;
      background: ${theme.colors.secondary};
      border-radius: 50%;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    &::-webkit-slider-runnable-track {
      height: 10px;
      background: ${theme.colors.placeholder};
    }
  `}
`;

export const StyledAction = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;
