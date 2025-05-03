import styled from "styled-components";

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  ${({ theme }) => theme.spacing.indents};
`;

export const StyledGridItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #ebebeb;
  text-align: center;
`;
