import { LINK_TEMPLATES } from "@/common/constants";
import { BaseStyledLink } from "@/components/ui/buttons/BaseButton";
import { useGameStore } from "@/store/game";
import { useUserStore } from "@/store/user";

import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  span {
    text-align: center;
    ${({ theme }) => css`
      ${theme.fontSizes.large};
      color: ${theme.colors.text};
      b {
        color: ${theme.colors.secondary};
      }
    `}
  }
`;

export const End = () => {
  const gameStore = useGameStore((state) => state.game);
  const user = useUserStore((state) => state.user);

  const result =
    gameStore?.winner === "draw"
      ? "Draw"
      : user?.nickname === gameStore?.winner
      ? "You Win"
      : "You Lose";

  return (
    <StyledWrapper>
      <span>
        Game End <br />
        <b>{result}</b>
      </span>
      <BaseStyledLink to={LINK_TEMPLATES.HOME()}>Back to main</BaseStyledLink>
    </StyledWrapper>
  );
};
