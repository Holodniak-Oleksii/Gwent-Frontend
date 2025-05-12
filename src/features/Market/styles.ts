import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  ${({ theme }) => theme.spacing.indents}
`;

export const StyledContainer = styled.div`
  width: 100%;
  ${({ theme }) => theme.spacing.content}
`;

export const StyledList = styled.div`
  width: 100%;
  ${({ theme }) => theme.common.grid}
`;
