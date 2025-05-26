import { ECardAbilities, EForces, EType } from "@/common/types";
import { PlayingCard } from "@/components/cards/PlayingCard";
import { useGameStore } from "@/store/game";
import { useUserStore } from "@/store/user";
import {
  StyledCardsList,
  StyledEffect,
  StyledForceIcon,
  StyledHorn,
  StyledImage,
  StyledList,
  StyledRow,
} from "./styles";

import imageHorn from "@/assets/images/game/horn.webp";
import { FC, useMemo } from "react";
import { forceIcons } from "./data";

interface IRowProps {
  position: EForces;
  isMyCards: boolean;
}

export const Row: FC<IRowProps> = ({ position, isMyCards }) => {
  const { game } = useGameStore();
  const { user } = useUserStore();

  const hornCard = useMemo(
    () => game?.boardCards.find((e) => e.card.ability === ECardAbilities.HORN),
    [game?.boardCards]
  );

  const isEffect = useMemo(
    () =>
      game?.effects.some((e) => e.row === position && e.type === EType.WEATHER),
    [game?.effects, position]
  );

  const isHorn = useMemo(
    () =>
      game?.effects.some(
        (e) =>
          e.row === position &&
          e.type === EType.SPECIAL &&
          user?.nickname &&
          (e.applyTo.includes(user?.nickname) ? isMyCards : !isMyCards)
      ),
    [game?.effects, isMyCards, position, user?.nickname]
  );

  const renderCards = () =>
    game?.boardCards
      ?.filter(
        (c) =>
          c.position === position &&
          (c.ownerNickname === user?.nickname) === isMyCards &&
          c.card.type === EType.UNIT
      )
      .map((c) => <PlayingCard key={c.card._id} card={c.card} />);

  return (
    <StyledRow>
      <StyledHorn>
        <StyledImage src={imageHorn} alt="horn" />
        {isHorn && hornCard && <PlayingCard card={hornCard.card} />}
      </StyledHorn>
      <StyledList>
        <StyledForceIcon src={forceIcons[position]} alt="force" />
        <StyledCardsList>{renderCards()}</StyledCardsList>
      </StyledList>
      {isEffect && <StyledEffect />}
    </StyledRow>
  );
};
