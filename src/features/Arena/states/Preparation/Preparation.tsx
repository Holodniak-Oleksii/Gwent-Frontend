import { useGetMyCardsQuery } from "@/api/cards";
import {
  EFaction,
  EGameRequestMessageType,
  EType,
  ICardModel,
} from "@/common/types";
import { Loader } from "@/components/shared/Loader";
import { FractionCarousel } from "@/features/Arena/states/Preparation/components/FractionCarousel";
import { TOperation } from "@/features/Arena/states/Preparation/types";
import { IArenaScreen } from "@/features/Arena/states/types";
import { FC, useState } from "react";
import { ChooseCards } from "./components/ChooseCards";
import { StyledWrapper } from "./styles";

const universalArray = [EFaction.WEATHER, EFaction.NEUTRAL, EFaction.SPECIAL];
const cardDefault: Record<EFaction, ICardModel[]> = {
  [EFaction.KINGDOMS_OF_THE_NORTH]: [],
  [EFaction.MONSTERS]: [],
  [EFaction.NILFGAARD]: [],
  [EFaction.SCOIATAEL]: [],
  [EFaction.NEUTRAL]: [],
  [EFaction.SPECIAL]: [],
  [EFaction.WEATHER]: [],
};
export const Preparation: FC<IArenaScreen> = ({ game }) => {
  const { data, isLoading } = useGetMyCardsQuery();
  const [activeFraction, setActiveFraction] = useState<EFaction>(
    EFaction.KINGDOMS_OF_THE_NORTH
  );
  const universal =
    data?.cards.filter((i) => universalArray.includes(i.fractionId)) || [];

  const [chooseCards, setChooseCards] =
    useState<Record<EFaction, ICardModel[]>>(cardDefault);

  const handlerCardClick = (card: ICardModel, operation: TOperation) => {
    if (operation === "set") {
      setChooseCards((prev) => ({
        ...prev,
        [activeFraction]: [card, ...prev[activeFraction]],
      }));
    }
    if (operation === "unset") {
      setChooseCards((prev) => ({
        ...prev,
        [activeFraction]: prev[activeFraction].filter(
          (i) => i._id !== card._id
        ),
      }));
    }
  };

  const onStart = (cards: ICardModel[]) => {
    game.sendMessage(
      JSON.stringify({
        type: EGameRequestMessageType.UPDATE_CARDS,
        data: { cards },
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
        leader={data.cards.find(
          (i) => i.type === EType.LEADER && i.fractionId === activeFraction
        )}
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
