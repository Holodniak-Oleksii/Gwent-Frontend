import { ICardModel } from "@/common/types";
import { HeroCard } from "@/components/cards/HeroCard";
import { getUrlImage } from "@/utils/image";
import { FC, useState } from "react";
import {
  StyledCardOverlay,
  StyledCards,
  StyledLeader,
  StyledLeaderImage,
  StyledWrapper,
} from "./styles";

interface IChooseCardsProps {
  list: ICardModel[];
  leader?: ICardModel;
}

export const ChooseCards: FC<IChooseCardsProps> = ({ list, leader }) => {
  const [chooseCards, setChooseCards] = useState<ICardModel[]>([]);

  const handlerCardChoose = (card: ICardModel, operation: "set" | "unset") => {
    if (operation === "set") {
      setChooseCards((prev) => [card, ...prev]);
    }
    if (operation === "unset") {
      setChooseCards((prev) => prev.filter((i) => i.id !== card.id));
    }
  };

  const renderCards = (operation: "set" | "unset", cards: ICardModel[]) =>
    cards.map((c) => (
      <StyledCardOverlay
        key={c.id}
        onClick={() => handlerCardChoose(c, operation)}
      >
        <HeroCard card={c} />
      </StyledCardOverlay>
    ));

  return (
    <StyledWrapper>
      <StyledCards>
        {renderCards(
          "set",
          list.filter((c) => !chooseCards.some((i) => i.id === c.id))
        )}
      </StyledCards>
      <StyledLeader>
        {!!leader && (
          <StyledLeaderImage src={getUrlImage(leader)} alt={leader.image} />
        )}
      </StyledLeader>
      <StyledCards>{renderCards("unset", chooseCards)}</StyledCards>
    </StyledWrapper>
  );
};
