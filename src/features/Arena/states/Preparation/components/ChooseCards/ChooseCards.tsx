import { EType, ICardModel } from "@/common/types";
import { HeroCard } from "@/components/cards/HeroCard";
import { TOperation } from "@/features/Arena/states/Preparation/types";
import { getUrlImage } from "@/utils/image";
import { FC, useMemo } from "react";
import {
  StyledCardOverlay,
  StyledCards,
  StyledLeader,
  StyledLeaderImage,
  StyledText,
  StyledWrapper,
} from "./styles";

interface IChooseCardsProps {
  list: ICardModel[];
  leader?: ICardModel;
  chooseCards: ICardModel[];
  handlerCardClick: (card: ICardModel, opName: TOperation) => void;
  onStart: (cards: ICardModel[]) => void;
}

export const ChooseCards: FC<IChooseCardsProps> = ({
  list,
  leader,
  chooseCards,
  handlerCardClick,
  onStart,
}) => {
  const stats = useMemo(() => {
    const specialCardsCount = chooseCards.filter(
      (card) => card.type === EType.WEATHER
    ).length;
    const totalPower = chooseCards.reduce((sum, card) => sum + card.power, 0);
    return {
      totalCards: list.length,
      selectedCards: chooseCards.length,
      specialCards: specialCardsCount,
      bandPower: totalPower,
    };
  }, [list, chooseCards]);

  const availableCards = useMemo(
    () =>
      list.filter(
        (card) => !chooseCards.some((selected) => selected.id === card.id)
      ),
    [list, chooseCards]
  );

  const renderCards = (operation: TOperation, cards: ICardModel[]) =>
    cards.map((card) => (
      <StyledCardOverlay
        key={card.id}
        onClick={() => handlerCardClick(card, operation)}
      >
        <HeroCard card={card} />
      </StyledCardOverlay>
    ));

  return (
    <StyledWrapper>
      <StyledCards>{renderCards("set", availableCards)}</StyledCards>
      <StyledLeader>
        {leader && (
          <StyledLeaderImage src={getUrlImage(leader)} alt={leader.image} />
        )}
        <StyledText>Cards Number: {stats.totalCards}</StyledText>
        <StyledText>Band Number: {stats.selectedCards}</StyledText>
        <StyledText>Special Cards: {stats.specialCards}</StyledText>
        <StyledText>Band Power: {stats.bandPower}</StyledText>
        <button onClick={() => onStart(chooseCards)}>start game</button>
      </StyledLeader>
      <StyledCards>{renderCards("unset", chooseCards)}</StyledCards>
    </StyledWrapper>
  );
};
