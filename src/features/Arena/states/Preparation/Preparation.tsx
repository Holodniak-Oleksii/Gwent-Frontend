import { useGetMyCardsQuery } from "@/api/cards";
import { useGame } from "@/common/hooks/useGame";
import {
  EFaction,
  EGameRequestMessageType,
  EType,
  ICardModel,
} from "@/common/types";
import { Loader } from "@/components/shared/Loader";
import { FractionCarousel } from "@/features/Arena/states/Preparation/components/FractionCarousel";
import { TOperation } from "@/features/Arena/states/Preparation/types";
import { usePreparationStore } from "@/store/preparation";
import { useMemo, useState } from "react";
import { ChooseCards } from "./components/ChooseCards";
import { StyledWrapper } from "./styles";

const universalArray = [EFaction.WEATHER, EFaction.NEUTRAL, EFaction.SPECIAL];

export const Preparation = () => {
  const { game } = useGame();
  const { data, isLoading } = useGetMyCardsQuery();

  const [activeFraction, setActiveFraction] = useState<EFaction>(
    EFaction.KINGDOMS_OF_THE_NORTH
  );

  const universal =
    data?.cards.filter((i) => universalArray.includes(i.fractionId)) || [];

  const { chooseCards, setCard, unsetCard } = usePreparationStore();

  const leader = useMemo(
    () =>
      data?.cards.find(
        (i) => i.type === EType.LEADER && i.fractionId === activeFraction
      ),
    [data?.cards, activeFraction]
  );

  const handlerCardClick = (card: ICardModel, operation: TOperation) => {
    if (operation === "set") {
      setCard(activeFraction, card);
    }
    if (operation === "unset") {
      unsetCard(activeFraction, card._id);
    }
  };

  const onStart = (cards: ICardModel[]) => {
    game.sendMessage(
      JSON.stringify({
        type: EGameRequestMessageType.UPDATE_CARDS,
        data: { cards, leader },
      })
    );
  };

  if (isLoading || !data) {
    return <Loader />;
  }

  return (
    <StyledWrapper>
      <FractionCarousel
        activeFraction={activeFraction}
        onChangeFraction={(f) => setActiveFraction(f)}
      />
      <ChooseCards
        leader={leader}
        list={data.cards
          .filter(
            (i) => i.type !== EType.LEADER && i.fractionId === activeFraction
          )
          .concat(universal)}
        chooseCards={chooseCards[activeFraction]}
        handlerCardClick={handlerCardClick}
        onStart={onStart}
      />
    </StyledWrapper>
  );
};
