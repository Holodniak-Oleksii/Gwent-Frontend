import { EForces } from "@/common/types";
import { useGameStore } from "@/store/game";
import { useUserStore } from "@/store/user";
import { getUrlImage } from "@/utils/image";
import { StyledCard, StyledRow, StyledWrapper } from "./styles";

export const Board = () => {
  const game = useGameStore((state) => state.game);
  const user = useUserStore((state) => state.user);

  const renderCards = (position: EForces, isMyCards: boolean) =>
    game?.boardCards
      .filter(
        (c) =>
          c.position === position &&
          (c.ownerNickname === user?.nickname) === isMyCards
      )
      .map((c) => (
        <StyledCard
          key={c.card.id}
          src={getUrlImage(c.card)}
          alt={c.card.image}
        />
      ));

  return (
    <StyledWrapper>
      <StyledRow>{renderCards(EForces.SIEGE, false)}</StyledRow>
      <StyledRow>{renderCards(EForces.RANGED, false)}</StyledRow>
      <StyledRow>{renderCards(EForces.CLOSE, false)}</StyledRow>
      <hr />
      <StyledRow>{renderCards(EForces.CLOSE, true)}</StyledRow>
      <StyledRow>{renderCards(EForces.RANGED, true)}</StyledRow>
      <StyledRow>{renderCards(EForces.SIEGE, true)}</StyledRow>
    </StyledWrapper>
  );
};
