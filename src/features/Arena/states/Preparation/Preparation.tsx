import { useGetMyCardsQuery } from "@/api/cards";
import {
  EFaction,
  EGameRequestMessageType,
  EType,
  ICardModel,
} from "@/common/types";
import { TOperation } from "@/features/Arena/states/Preparation/types";
import { IArenaScreen } from "@/features/Arena/states/types";
import { FC, useState } from "react";
import { ChooseCards } from "./components/ChooseCards";
import { StyledActiveTab, StyledTabs, StyledWrapper } from "./styles";

export const Preparation: FC<IArenaScreen> = ({ game }) => {
  const { data, isLoading } = useGetMyCardsQuery();
  const [activeFraction, setActiveFraction] = useState<EFaction>(
    EFaction.KINGDOMS_OF_THE_NORTH
  );
  const universal =
    data?.cards.filter((i) => i.fractionId === EFaction.UNIVERSAL) || [];
  const [chooseCards, setChooseCards] = useState<
    Record<EFaction, ICardModel[]>
  >({
    [EFaction.KINGDOMS_OF_THE_NORTH]: [],
    [EFaction.MONSTERS]: [],
    [EFaction.NILFGAARD]: [],
    [EFaction.SCOIATAEL]: [],
    [EFaction.UNIVERSAL]: [],
  });

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
        [activeFraction]: prev[activeFraction].filter((i) => i.id !== card.id),
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
    return <>Loading...</>;
  }

  const renderTabs = () =>
    Object.values(EFaction).map((f) => {
      if (f === EFaction.UNIVERSAL) return null;
      return (
        <StyledActiveTab
          key={f}
          $isActive={f === activeFraction}
          onClick={() => setActiveFraction(f)}
        >
          {f}
        </StyledActiveTab>
      );
    });

  return (
    <StyledWrapper>
      <StyledTabs>{renderTabs()}</StyledTabs>
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
