import { convertHexToRgba } from "@/utils/colorUtil";
import Modal from "react-modal";
import styled, { css } from "styled-components";

export const StyledScroll = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100%;
  padding: 24px 16px;
  display: flex;
`;

export const StyledModal = styled(Modal)`
  display: flex;
  overflow: auto;
  width: 100%;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const StyledHead = styled.div`
  padding: 16px;
  display: flex;
  gap: 16px;
  align-items: center;
  ${({ theme }) =>
    css`
      border-bottom: 1px solid ${convertHexToRgba(theme.colors.secondary, 0.2)};
    `}
`;

export const StyledTitle = styled.p`
  width: calc(100% - 40px);
  line-height: 1.2;
  font-weight: 500;
  ${({ theme }) =>
    css`
      color: ${theme.colors.text};
      ${theme.fontSizes.big}
    `}
`;

export const StyledExit = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const StyledContainer = styled.div<{
  maxWidth: string;
  bgcolor?: string;
}>`
  width: 100%;
  margin: auto;
  border-radius: 10px;
  max-width: ${({ maxWidth }) => maxWidth};
  ${({ bgcolor, theme }) =>
    bgcolor
      ? css`
          background-color: ${bgcolor};
        `
      : css`
          background: ${theme.colors.primary};
          border: 1px solid ${convertHexToRgba(theme.colors.secondary, 0.2)};
        `}
`;
