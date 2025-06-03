import InstagramIcon from "@/common/icons/social/InstagramIcon";
import PinterestIcon from "@/common/icons/social/PinterestIcon";
import YouTubeIcon from "@/common/icons/social/YouTubeIcon";
import { convertHexToRgba } from "@/utils/colorUtil";
import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
  position: absolute;
  right: -3px;
  bottom: 12px;
  transform: translateX(100%);
  border-radius: 0 8px 28px 0;
  overflow: hidden;
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.primary};
    outline: 1px solid ${convertHexToRgba(theme.colors.secondary, 0.5)};
  `}
`;

const StyledIcon = styled.div`
  padding: 12px 14px;
  svg {
    width: 24px;
    height: fit-content;
  }
  ${({ theme }) => css`
    background-color: ${convertHexToRgba(theme.colors.secondary, 0.1)};
  `}
`;

export const SocialMedia = () => (
  <StyledWrapper>
    <StyledIcon>
      <InstagramIcon />
    </StyledIcon>
    <StyledIcon>
      <PinterestIcon />
    </StyledIcon>
    <StyledIcon>
      <YouTubeIcon />
    </StyledIcon>
  </StyledWrapper>
);
