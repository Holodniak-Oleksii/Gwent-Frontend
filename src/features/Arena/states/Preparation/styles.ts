import { IActiveble } from "@/common/types/common";
import styled from "styled-components";

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

export const StyledWrapper = styled.div`
  width: 100%;
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
