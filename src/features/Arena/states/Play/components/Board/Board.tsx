import imageAgile from "@/assets/images/combats/agile.webp";
import imageSword from "@/assets/images/game/close.webp";
import imageRanged from "@/assets/images/game/ranged.webp";
import imageSiege from "@/assets/images/game/siege.webp";

import imageHorn from "@/assets/images/game/horn.webp";
import { EForces, EType } from "@/common/types";
import { PlayingCard } from "@/components/cards/PlayingCard";
import HornIcon from "@/components/icons/HornIcon";
import { useGameStore } from "@/store/game";
import { useUserStore } from "@/store/user";
import {
  StyledCardsList,
  StyledContainer,
  StyledEffect,
  StyledForceIcon,
  StyledHorn,
  StyledLine,
  StyledList,
  StyledRow,
  StyledWrapper,
} from "./styles";
const forceIcons = {
  [EForces.SIEGE]: imageSiege,
  [EForces.RANGED]: imageRanged,
  [EForces.CLOSE]: imageSword,
  [EForces.AGILE]: imageAgile,
};

export const Board = () => {
  const { game } = useGameStore();
  const { user } = useUserStore();

  const renderRow = (position: EForces, isMyCards: boolean) => (
    <StyledRow>
      <StyledHorn>
        <img src={imageHorn} alt="horn" />
        {game?.effects.some(
          (e) =>
            e.row === position &&
            e.type === EType.SPECIAL &&
            user?.nickname &&
            (e.applyTo.includes(user?.nickname) ? isMyCards : !isMyCards)
        ) && <HornIcon />}
      </StyledHorn>
      <StyledList>
        <StyledForceIcon src={forceIcons[position]} alt="force" />
        <StyledCardsList>
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
        </StyledCardsList>
      </StyledList>
      {game?.effects.some(
        (e) => e.row === position && e.type === EType.WEATHER
      ) && <StyledEffect />}
    </StyledRow>
  );

  return (
    <StyledWrapper>
      <StyledContainer>
        {[EForces.SIEGE, EForces.RANGED, EForces.CLOSE].map((pos) =>
          renderRow(pos, false)
        )}
      </StyledContainer>
      <StyledLine />
      <StyledContainer>
        {[EForces.CLOSE, EForces.RANGED, EForces.SIEGE].map((pos) =>
          renderRow(pos, true)
        )}
      </StyledContainer>
    </StyledWrapper>
  );
};
