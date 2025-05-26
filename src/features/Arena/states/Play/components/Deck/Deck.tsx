import { useGameStore } from "@/store/game";
import { Cards } from "./Cards";
import { StyledWrapper } from "./styles";

export const Deck = () => {
  const game = useGameStore((state) => state.game);

  return (
    <StyledWrapper>
      <Cards
        discards={game?.enemy?.discards || []}
        deckLength={game?.enemy?.deckLength || 0}
        fractionId={game?.enemy?.leader.fractionId}
      />
      <Cards
        discards={game?.discards || []}
        deckLength={game?.deck?.length || 0}
        fractionId={game?.leader.fractionId}
      />
    </StyledWrapper>
  );
};
