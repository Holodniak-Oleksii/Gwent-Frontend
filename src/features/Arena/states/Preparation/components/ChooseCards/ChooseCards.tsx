import { ECardAbilities, EType, ICardModel } from "@/common/types";
import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { IStats, TOperation } from "../../types";
import { CardCollection } from "../CardCollection";
import { Leader } from "../Leader";
import { StyledWrapper } from "./styles";

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
  const { t } = useTranslation();

  const stats: IStats = useMemo(() => {
    const heroCards = chooseCards.filter(
      (card) => card.ability === ECardAbilities.HERO
    ).length;

    const totalUnitCardStrength = chooseCards.reduce(
      (sum, card) => sum + card.power,
      0
    );
    return {
      totalCardsInDeck: chooseCards.length,
      specialCards: chooseCards.filter((card) => card.type !== EType.UNIT)
        .length,
      numberOfUnitCards: chooseCards.filter((card) => card.type === EType.UNIT)
        .length,
      totalUnitCardStrength,
      heroCards,
    };
  }, [chooseCards]);

  const availableCards = useMemo(
    () =>
      list.filter(
        (card) => !chooseCards.some((selected) => selected.id === card.id)
      ),
    [list, chooseCards]
  );

  return (
    <StyledWrapper>
      <CardCollection
        list={availableCards}
        onCardClick={(card) => handlerCardClick(card, "set")}
        title={t("title.cardCollection")}
      />
      <Leader
        leader={leader}
        onStart={() => onStart(chooseCards)}
        stats={stats}
      />
      <CardCollection
        title={t("title.cardsInDeck")}
        list={chooseCards}
        onCardClick={(card) => handlerCardClick(card, "unset")}
      />
    </StyledWrapper>
  );
};
