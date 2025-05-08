import { convertHexToRgba } from "@/utils/colorUtil";
import styled, { css } from "styled-components";

export const StyledFormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  overflow-y: auto;
  padding: 40px;
`;

export const StyledBgImage = styled.img`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
`;

export const StyledFrame = styled.div`
  margin: auto;
  position: relative;
  width: 100%;
  max-width: 440px;
  z-index: 3;
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.5);

  & > div {
    backdrop-filter: blur(4px);
    position: relative;
    z-index: 4;
    ${({ theme }) => css`
      background-color: ${convertHexToRgba(theme.colors.placeholder, 0.6)};
    `}
  }
`;

export const StyledColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  .decorated-button {
    margin-top: 20px;
  }
`;

export const StyledAvatar = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
`;

export const StyledAvatarImage = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-75%);
  height: 225%;
  aspect-ratio: 1/1;
  object-fit: contain;
  padding: 16px;
  border-radius: 50%;
  ${({ theme }) => css`
    border: 3px solid ${theme.colors.secondary};
    background-color: ${theme.colors.primary};
  `}
`;

export const StyledLabel = styled.span`
  width: 100%;
  text-align: left;
  margin-top: 4px;
  font-family: "HalisGR", sans-serif;

  a {
    font-family: "HalisGR", sans-serif;
  }
  ${({ theme }) => css`
    text-shadow: 1px 1px ${theme.colors.focus};
    ${theme.fontSizes.medium};
    a {
      color: ${theme.colors.secondary};
      text-decoration: underline;
    }
  `}
`;
