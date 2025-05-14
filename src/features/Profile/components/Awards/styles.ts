import { getCardWidth } from "@/utils";
import styled, { css } from "styled-components";

export const StyledList = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 16px;
    & > div {
      width: ${getCardWidth("16px", 8)};
      ${theme.media.width.lg} {
        width: ${getCardWidth("16px", 7)};
      }
    }
  `};
`;

export const StyledIcon = styled.img`
  width: 80px;
  aspect-ratio: 1/1;
  object-fit: contain;
`;
