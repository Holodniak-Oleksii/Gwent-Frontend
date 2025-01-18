import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  height: 70px;
  justify-content: flex-end;
  background-color: #f4f4f4;
  border-bottom: 1px solid #e0e0e0;
  padding: 0 20px;
  gap: 16px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const StyledLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: #000;
  padding: 8px 12px;
  border-radius: 4px;
  background-color: #e0e0e0;
  border: 1px solid #d0d0d0;
  text-transform: uppercase;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #d6d6d6;
    color: #333;
  }
`;

export const StyledButton = styled.button`
  font-size: 16px;
  text-decoration: none;
  color: #000;
  padding: 8px 12px;
  border-radius: 4px;
  background-color: #e0e0e0;
  border: 1px solid #d0d0d0;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #d6d6d6;
    color: #333;
  }

  outline: none;
`;

export const StyledMain = styled.main`
  height: 100%;
  width: 100%;
  padding-top: 70px;
`;
