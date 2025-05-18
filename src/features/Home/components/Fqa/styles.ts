import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  ${({ theme }) => theme.spacing.content};
`;

export const StyledContainer = styled.div`
  width: 100%;
  ${({ theme }) => theme.spacing.indents};
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const StyledQuestions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 1280px;
  margin: 0 auto;
  text-align: left;
`;

export const StyledQuestionItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const StyledQuestionNumber = styled.div`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};
    ${theme.fontSizes.medium}
  `}
`;

export const StyledQuestionContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledQuestionTitle = styled.h5`
  margin: 0 0 8px 0;
  ${({ theme }) => css`
    color: ${theme.colors.text};
    ${theme.fontSizes.regular};
  `}
`;

export const StyledQuestionText = styled.p`
  margin: 0;
  ${({ theme }) => css`
    color: ${theme.colors.lightText};
    ${theme.fontSizes.medium}
  `}
`;
