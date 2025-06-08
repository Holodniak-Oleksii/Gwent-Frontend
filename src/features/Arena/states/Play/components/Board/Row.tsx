import {
  ECardAbilities,
  EForces,
  EGameRequestMessageType,
  EModalKey,
  EType,
  ICardModel,
} from "@/common/types";
import { PlayingCard } from "@/components/cards/PlayingCard";
import { useGameStore } from "@/store/game";
import { useUserStore } from "@/store/user";
import {
  StyledCardsList,
  StyledForceIcon,
  StyledHorn,
  StyledImage,
  StyledList,
  StyledRow,
} from "./styles";

import imageHorn from "@/assets/images/game/horn.webp";
import { useGame } from "@/common/hooks/useGame";
import { Effect } from "@/components/effects/Effect";
import { useBoardStore } from "@/store/board";
import { useModal } from "@ebay/nice-modal-react";
import { FC, useMemo } from "react";
import { forceIcons } from "./data";

interface IRowProps {
  position: EForces;
  isMyCards: boolean;
}

export const Row: FC<IRowProps> = ({ position, isMyCards }) => {
  const gameStore = useGameStore((state) => state.game);
  const { game } = useGame();
  const { user } = useUserStore();
  const { hide } = useModal(EModalKey.APPLY_CARD);

  const boardAbility = useBoardStore((state) => state.ability);
  const card = useBoardStore((state) => state.chooseCard);
  const setChooseCard = useBoardStore((state) => state.setChooseCard);
  const setAbility = useBoardStore((state) => state.setAbility);

  const onChooseCard = (targetCard: ICardModel) => {
    if (
      targetCard.ability === ECardAbilities.HERO &&
      boardAbility === ECardAbilities.MARDROEME
    )
      return;

    game.sendMessage(
      JSON.stringify({
        type: EGameRequestMessageType.APPLY_CARD,
        data: { card, targetCard },
      })
    );
    setChooseCard(null);
    setAbility(null);
    hide();
  };

  const getInteractive = () => {
    if (boardAbility === ECardAbilities.MARDROEME) {
      return !isMyCards;
    }
    if (boardAbility === ECardAbilities.DECOY) {
      return isMyCards;
    }
    return false;
  };

  const hornCard = useMemo(
    () =>
      gameStore?.boardCards.find(
        (e) =>
          e.card.ability === ECardAbilities.HORN &&
          e.card.type === EType.SPECIAL
      ),
    [gameStore?.boardCards]
  );

  const isHorn = useMemo(
    () =>
      gameStore?.effects.some(
        (e) =>
          e.row === position &&
          e.type === EType.SPECIAL &&
          user?.nickname &&
          (e.applyTo.includes(user?.nickname) ? isMyCards : !isMyCards)
      ),
    [gameStore?.effects, isMyCards, position, user?.nickname]
  );

  const renderCards = () =>
    gameStore?.boardCards
      ?.filter(
        (c) =>
          c.position === position &&
          (c.ownerNickname === user?.nickname) === isMyCards &&
          c.card.type === EType.UNIT
      )
      .map((c) => (
        <PlayingCard
          key={c.card._id}
          card={c.card}
          isCursed={c.isCursed}
          onClick={() => onChooseCard(c.card)}
        />
      ));

  return (
    <StyledRow $isClickable={getInteractive()}>
      <StyledHorn>
        <StyledImage src={imageHorn} alt="horn" />
        {isHorn && hornCard && (
          <StyledCardsList $isClickable={false}>
            <PlayingCard card={hornCard.card} />
          </StyledCardsList>
        )}
      </StyledHorn>
      <StyledList>
        <StyledForceIcon src={forceIcons[position]} alt="force" />
        <StyledCardsList $isClickable={getInteractive()}>
          {renderCards()}
        </StyledCardsList>
      </StyledList>
      <Effect position={position} />
    </StyledRow>
  );
};
