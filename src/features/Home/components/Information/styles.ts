import styled, { css } from "styled-components";
import { StyledWrapper } from "../../styles";

export const StyledContainer = styled(StyledWrapper)`
  width: 100%;
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    ${theme.spacing.content}
    border-top: 1px solid ${theme.colors.border};
  `};
`;

export const StyledContent = styled.div`
  width: 100%;
  display: grid;
  padding: 120px 0;
  gap: 64px;
  align-items: center;
  grid-template-columns: 50% 1fr;
`;

export const StyledTexts = styled.div``;

export const StyledImageContainer = styled.div`
  width: 100%;
  position: relative;
  aspect-ratio: 3 / 2;
  padding: 1px;
`;

export const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  clip-path: polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 15% 100%, 0% 85%);
`;

export const StyledContentImage = styled.div`
  position: relative;
  clip-path: polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 15% 100%, 0% 85%);
  border: 2px solid transparent;
  width: 100%;
  height: 100%;
  ${({ theme }) => `background-color: ${theme.colors.secondary}`}
`;
