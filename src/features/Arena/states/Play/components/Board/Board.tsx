import { EForces } from "@/common/types";
import { PlayingCard } from "@/components/cards/PlayingCard";
import BowIcon from "@/components/icons/BowIcon";
import SwordIcon from "@/components/icons/SwordIcon";
import TrebuchetIcon from "@/components/icons/TrebuchetIcon";
import { useGameStore } from "@/store/game";
import { useUserStore } from "@/store/user";
import { StyledForceIcon, StyledRow, StyledWrapper } from "./styles";

export const Board = () => {
  const game = useGameStore((state) => state.game);
  const user = useUserStore((state) => state.user);

  const renderCards = (position: EForces, isMyCards: boolean) =>
    game?.boardCards
      ?.filter(
        (c) =>
          c.position === position &&
          (c.ownerNickname === user?.nickname) === isMyCards
      )
      .map((c) => <PlayingCard key={c.card.id} card={c.card} />);

  return (
    <StyledWrapper>
      <StyledRow>
        <StyledForceIcon>
          <TrebuchetIcon />
        </StyledForceIcon>
        {renderCards(EForces.SIEGE, false)}
      </StyledRow>
      <StyledRow>
        <StyledForceIcon>
          <BowIcon />
        </StyledForceIcon>
        {renderCards(EForces.RANGED, false)}
      </StyledRow>
      <StyledRow>
        <StyledForceIcon>
          <SwordIcon />
        </StyledForceIcon>
        {renderCards(EForces.CLOSE, false)}
      </StyledRow>
      <hr />
      <StyledRow>
        <StyledForceIcon>
          <SwordIcon />
        </StyledForceIcon>
        {renderCards(EForces.CLOSE, true)}
      </StyledRow>
      <StyledRow>
        <StyledForceIcon>
          <BowIcon />
        </StyledForceIcon>
        {renderCards(EForces.RANGED, true)}
      </StyledRow>
      <StyledRow>
        <StyledForceIcon>
          <TrebuchetIcon />
        </StyledForceIcon>
        {renderCards(EForces.SIEGE, true)}
      </StyledRow>
    </StyledWrapper>
  );
};
