import IconEmail from "@/common/icons/IconEmail";
import IconGithubCircle from "@/common/icons/social/IconGithubCircle";
import IconLinkedin from "@/common/icons/social/IconLinkedin";
import { convertHexToRgba } from "@/utils/colorUtil";
import styled, { css } from "styled-components";

const StyledPanel = styled.div`
  position: relative;
  z-index: 2;
  padding: 24px 16px;
  margin-top: auto;
  display: flex;
  width: 100%;
  ${({ theme }) => css`
    background-color: ${convertHexToRgba(theme.colors.primary, 0.5)};
    border-top: 1px solid ${theme.colors.secondary};
  `}
`;

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: auto;
`;

const StyledIcon = styled.div`
  aspect-ratio: 1/1;
  padding: 6px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.secondary};
  `}
`;

const StyledItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  a {
    ${({ theme }) => css`
      color: ${convertHexToRgba(theme.colors.text, 0.75)};
      ${theme.common.secondFontFamily}
    `}
  }
`;

export const LinksPanel = () => (
  <StyledPanel>
    <StyledFlex>
      <StyledItem>
        <StyledIcon>
          <IconEmail />
        </StyledIcon>
        <a href="mailto:holodniak.oleksii@student.uzhnu.edu.ua">
          holodniak.oleksii@student.uzhnu.edu.ua
        </a>
      </StyledItem>
      <StyledItem>
        <StyledIcon>
          <IconGithubCircle />
        </StyledIcon>
        <a href="https://github.com/Holodniak-Oleksii">
          Github / Holodniak-Oleksii
        </a>
      </StyledItem>
      <StyledItem>
        <StyledIcon>
          <IconLinkedin />
        </StyledIcon>
        <a href="https://www.linkedin.com/in/holodniak-oleksii">
          LinkedIn / holodniak-oleksii
        </a>
      </StyledItem>
    </StyledFlex>
  </StyledPanel>
);
