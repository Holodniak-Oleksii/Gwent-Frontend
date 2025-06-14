import imageDraw from "@/assets/images/result/draw.webp";
import imageLose from "@/assets/images/result/lose.webp";
import imageWin from "@/assets/images/result/win.webp";
import { LINK_TEMPLATES } from "@/common/constants";
import { FirefliesPixi } from "@/components/shared/Fireflies";
import { BaseStyledLink } from "@/components/ui/buttons/BaseButton";
import { useGameStore } from "@/store/game";
import { useUserStore } from "@/store/user";
import styled, { css } from "styled-components";

type TResult = "draw" | "win" | "lose";

const resultImage: Record<TResult, string> = {
  draw: imageDraw,
  win: imageWin,
  lose: imageLose,
};

const StyledWrapper = styled.div<{ $isWin: boolean }>`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  ${({ $isWin, theme }) => css`
    ${$isWin && theme.common.bgTexture}
  `}
`;

const StyledImage = styled.img``;

export const End = () => {
  const gameStore = useGameStore((state) => state.game);
  const user = useUserStore((state) => state.user);
  const result: TResult =
    gameStore?.winner === "draw"
      ? "draw"
      : user?.nickname === gameStore?.winner
      ? "win"
      : "lose";

  return (
    <StyledWrapper $isWin={result === "win"}>
      {result === "win" && <FirefliesPixi />}
      <StyledImage src={resultImage[result]} alt={result} />
      <BaseStyledLink to={LINK_TEMPLATES.HOME()}>Back to main</BaseStyledLink>
    </StyledWrapper>
  );
};
