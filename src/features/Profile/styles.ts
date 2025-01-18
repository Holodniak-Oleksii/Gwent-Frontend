import { IActiveble } from "@/common/types/common";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 32px;
`;

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const StyledTabs = styled.div`
  display: flex;
  flex-wrap: 12px;
  gap: 12px;
`;

export const StyledActiveTab = styled.button<IActiveble>`
  background-color: aliceblue;
  color: #000;
  padding: 8px 16px;
  border: 1px solid ${({ $isActive }) => ($isActive ? "#000" : "#fff")};
`;
