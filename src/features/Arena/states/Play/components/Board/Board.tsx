import { EForces, EType } from "@/common/types";
import { PlayingCard } from "@/components/cards/PlayingCard";
import BowIcon from "@/components/icons/BowIcon";
import HornIcon from "@/components/icons/HornIcon";
import SwordIcon from "@/components/icons/SwordIcon";
import TrebuchetIcon from "@/components/icons/TrebuchetIcon";
import { useGameStore } from "@/store/game";
import { useUserStore } from "@/store/user";
import {
  StyledEffect,
  StyledForceIcon,
  StyledHorn,
  StyledRow,
  StyledWrapper,
} from "./styles";

const forceIcons = {
  [EForces.SIEGE]: <TrebuchetIcon />,
  [EForces.RANGED]: <BowIcon />,
  [EForces.CLOSE]: <SwordIcon />,
  [EForces.AGILE]: <SwordIcon />,
};

export const Board = () => {
  const { game } = useGameStore();
  const { user } = useUserStore();

  const renderRow = (position: EForces, isMyCards: boolean) => (
    <StyledRow>
      <StyledHorn>
        {game?.effects.some(
          (e) =>
            e.row === position &&
            e.type === EType.SPECIAL &&
            user?.nickname &&
            (e.applyTo.includes(user?.nickname) ? isMyCards : !isMyCards)
        ) && <HornIcon />}
      </StyledHorn>
      <StyledForceIcon>{forceIcons[position]}</StyledForceIcon>
      {game?.boardCards
        ?.filter(
          (c) =>
            c.position === position &&
            (c.ownerNickname === user?.nickname) === isMyCards &&
            c.card.type === EType.UNIT
        )
        .map((c) => (
          <PlayingCard key={c.card._id} card={c.card} />
        ))}

      {game?.effects.some(
        (e) => e.row === position && e.type === EType.WEATHER
      ) && <StyledEffect />}
    </StyledRow>
  );

  return (
    <StyledWrapper>
      {[EForces.SIEGE, EForces.RANGED, EForces.CLOSE].map((pos) =>
        renderRow(pos, false)
      )}
      <hr />
      {[EForces.CLOSE, EForces.RANGED, EForces.SIEGE].map((pos) =>
        renderRow(pos, true)
      )}
    </StyledWrapper>
  );
};
