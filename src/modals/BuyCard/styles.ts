import { BaseButton } from "@/components/ui/buttons/BaseButton";
import { convertHexToRgba } from "@/utils/colorUtil";
import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  padding: 16px;
  max-height: 300px;
  display: flex;
`;

export const StyledContent = styled.div`
  width: 100%;
  max-width: 210px;
  margin: 0 auto;
`;

export const StyledAction = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  justify-content: space-between;
  padding: 16px;
  ${({ theme }) => css`
    border-top: 1px solid ${convertHexToRgba(theme.colors.secondary, 0.2)};
  `}
`;

export const StyledTitle = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    ${theme.fontSizes.regular}
  `}
`;

export const StyledButton = styled(BaseButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
