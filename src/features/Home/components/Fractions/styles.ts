import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  ${({ theme }) => theme.spacing.content};
`;

export const StyledContent = styled.div`
  width: 100%;
  ${({ theme }) => theme.spacing.indents};
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const StyledList = styled.div`
  width: 100%;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  max-width: calc(100% - 80px);
  margin: 0 auto;
`;
