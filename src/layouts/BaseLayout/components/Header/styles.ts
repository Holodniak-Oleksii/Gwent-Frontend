import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 1000;
  background: rgba(25, 26, 30, 0.6);
  backdrop-filter: blur(3px);
  border-bottom: 1px solid rgba(223, 228, 248, 0.05);
`;

export const StyledContainer = styled.div`
  ${({ theme }) => theme.spacing.content};
  padding-top: 16px;
  padding-bottom: 16px;
  height: 100%;
  display: flex;
  gap: 72px;
`;

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    ${theme.fontSizes.medium};
    color: ${theme.colors.text};
    letter-spacing: 0.5px;
  `}
`;

export const StyledList = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const StyledLogo = styled(Link)`
  height: 100%;
  width: auto;
  img {
    width: auto;
    height: 100%;
  }
`;

export const StyledAction = styled.div`
  display: flex;
  gap: 16px;
  margin-left: auto;
  align-items: center;
`;
