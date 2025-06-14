import { EStatusNotification } from "@/common/types";
import { BaseButton } from "@/components/ui/buttons/BaseButton";
import theme from "@/theme/theme";
import { convertHexToRgba } from "@/utils/colorUtil";
import styled, { css } from "styled-components";

export const statusColor: Record<EStatusNotification, string> = {
  accepted: theme.colors.gold,
  pending: theme.colors.lightText,
  declined: theme.colors.error,
  completed: theme.colors.secondary,
};

export const StyledNotificationContainer = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.bgneonLight};
  `}
`;

export const StyledNotificationFlex = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 8px;
  position: relative;
`;

export const StyledNotificationStatus = styled.div<{
  status: EStatusNotification;
}>`
  padding: 4px 12px;
  border-radius: 24px;
  ${({ theme, status }) => css`
    ${theme.fontSizes.medium};
    background-color: ${statusColor[status]};
    ${theme.media.width.xs} {
      position: absolute;
      top: 0;
      right: -6px;
      transform: translateY(-32px);
    }
  `}
`;

export const StyledNotificationMessage = styled.div`
  flex: 1 1 auto;
  position: relative;
  ${({ theme }) => css`
    ${theme.fontSizes.medium};
    ${theme.common.secondFontFamily};
    color: ${theme.colors.text};
    a {
      ${theme.common.secondFontFamily};
      color: ${theme.colors.secondary};
      text-decoration: underline;
    }
    span {
      ${theme.common.secondFontFamily};
      color: ${theme.colors.gold};
    }
  `}
`;

export const StyledAction = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`;

export const StyledDateTime = styled.div`
  font-style: italic;
  margin-bottom: 4px;
  ${({ theme }) => css`
    ${theme.fontSizes.small};
    ${theme.common.secondFontFamily};
    color: ${convertHexToRgba(theme.colors.text, 0.6)};
    ${theme.media.width.xs} {
      margin-bottom: 12px;
    }
  `}
`;

export const StyledButton = styled(BaseButton)`
  padding: 4px;
  min-width: 100px;
  ${({ theme }) => css`
    ${theme.fontSizes.small};
  `}
`;
