import { BaseButton } from "@/components/ui/buttons/BaseButton";
import { StyledContainer } from "@/modals/styles";
import { convertHexToRgba } from "@/utils/colorUtil";
import styled, { css } from "styled-components";

export const StyledAction = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  justify-content: center;
`;

export const StyledCover = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledAbsolute = styled.div`
  position: absolute;
  width: 100%;
  height: fit-content;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledContent = styled(StyledContainer)`
  display: grid;
  grid-template-columns: 4fr 12fr 3fr;
`;

export const StyledForce = styled.button`
  width: calc(100 / 3 - 8px);
  aspect-ratio: 1/1;
  opacity: 0.6;
  transition: all 0.2s ease;
  &:hover {
    opacity: 1;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const StyledButton = styled(BaseButton)`
  ${({ theme }) => css`
    background-color: ${convertHexToRgba(theme.colors.gold, 0.1)};
    border: 1px solid ${theme.colors.gold};
    color: ${theme.colors.gold};
    ${theme.common.textShadow}
  `}
`;
