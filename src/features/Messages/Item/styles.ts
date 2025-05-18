import { TStatus } from "@/common/types";
import { BaseButton } from "@/components/ui/buttons/BaseButton";
import theme from "@/theme/theme";
import { convertHexToRgba } from "@/utils/colorUtil";
import styled, { css } from "styled-components";

export const statusColor: Record<TStatus, string> = {
  accepted: theme.colors.gold,
  pending: theme.colors.secondary,
  declined: theme.colors.error,
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
`;

export const StyledNotificationStatus = styled.div<{ status: TStatus }>`
  padding: 4px 12px;
  border-radius: 24px;
  ${({ status }) => css`
    background-color: ${statusColor[status]};
  `}
`;

export const StyledNotificationMessage = styled.div`
  flex: 1 1 auto;
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
  `}
`;

export const StyledButton = styled(BaseButton)`
  padding: 4px;
  min-width: 100px;
  ${({ theme }) => css`
    ${theme.fontSizes.small};
  `}
`;
