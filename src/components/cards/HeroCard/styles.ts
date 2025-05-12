import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  height: fit-content;
  aspect-ratio: 20/32;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.bgneonLight};
  `}
`;

export const StyledImage = styled.img<{ $isBuy?: boolean }>`
  width: 100%;
  height: ${({ $isBuy }) =>
    $isBuy ? "calc(100% - 120px)" : "calc(100% - 80px)"};
  object-fit: cover;
`;

export const StyledPanel = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  ${({ theme }) => css`
    span {
      text-align: center;
      ${theme.fontSizes.medium};
      color: ${theme.colors.text};
    }
  `}
`;

export const StyledLabel = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
