import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  ${({ theme }) => theme.spacing.indents};
`;

export const StyledContainer = styled.div`
  background-color: #f2f2f2;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: auto;
  width: 100%;
  min-height: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledNotificationContainer = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
`;

export const StyledNotificationFlex = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 8px;
`;

export const StyledNotificationStatus = styled.div`
  padding: 4px 12px;
  border-radius: 24px;
  background-color: #2dd8ff;
`;

export const StyledNotificationMessage = styled.div`
  font-size: 16px;
  font-weight: 400;
  flex: 1 1 auto;
`;

export const StyledAction = styled.div`
  display: flex;
  gap: 12px;
`;

export const StyledDateTime = styled.div`
  font-size: 12px;
  color: #a8a8a8;
  margin-bottom: 6px;
  font-style: italic;
`;
