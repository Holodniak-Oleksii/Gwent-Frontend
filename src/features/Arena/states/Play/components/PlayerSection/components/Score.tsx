import imageCoin from "@/assets/images/game/score-total.webp";
import { FC } from "react";
import styled, { css } from "styled-components";

interface IScoreProps {
  score?: number;
  isEnemy: boolean;
}
export const StyledWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(40%, -50%);
  border-radius: 50%;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
`;

const StyledContainer = styled.div<{ $isEnemy: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: hue-rotate(${({ $isEnemy }) => ($isEnemy ? 180 : 0)}deg);
  }
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
      1px 1px 0 black, 0px 0px 1px black;
    ${({ theme }) => css`
      ${theme.fontSizes.regular};
      color: ${theme.colors.text};
    `}
  }
`;

export const Score: FC<IScoreProps> = ({ isEnemy, score }) => (
  <StyledWrapper>
    <StyledContainer $isEnemy={isEnemy}>
      <img src={imageCoin} alt="score icon" />
      <span>{score || 0}</span>
    </StyledContainer>
  </StyledWrapper>
);
