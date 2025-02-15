import { EForces, EType } from "@/common/types";
import { PlayingCard } from "@/components/cards/PlayingCard";
import BowIcon from "@/components/icons/BowIcon";
import SwordIcon from "@/components/icons/SwordIcon";
import TrebuchetIcon from "@/components/icons/TrebuchetIcon";
import { useGameStore } from "@/store/game";
import { useUserStore } from "@/store/user";
import {
  StyledEffect,
  StyledForceIcon,
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
      <StyledForceIcon>{forceIcons[position]}</StyledForceIcon>
      {game?.boardCards
        ?.filter(
          (c) =>
            c.position === position &&
            (c.ownerNickname === user?.nickname) === isMyCards &&
            c.card.type === EType.UNIT
        )
        .map((c) => (
          <PlayingCard key={c.card.id} card={c.card} />
        ))}
      {game?.effects.includes(position) && <StyledEffect />}
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
