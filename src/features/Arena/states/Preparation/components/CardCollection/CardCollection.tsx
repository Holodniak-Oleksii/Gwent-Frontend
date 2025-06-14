import { ICardModel } from "@/common/types";
import { HeroCard } from "@/components/cards/HeroCard";
import { FC } from "react";
import {
  StyledCardOverlay,
  StyledContent,
  StyledList,
  StyledTitle,
  StyledWrapper,
} from "./styles";

interface ICardCollectionProps {
  list: ICardModel[];
  onCardClick: (card: ICardModel) => void;
  title: string;
}

export const CardCollection: FC<ICardCollectionProps> = ({
  list,
  onCardClick,
  title,
}) => {
  const renderCards = () =>
    list.map((card) => (
      <StyledCardOverlay key={card._id} onClick={() => onCardClick(card)}>
        <HeroCard card={card} />
      </StyledCardOverlay>
    ));

  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledContent>
        <StyledList>{renderCards()}</StyledList>
      </StyledContent>
    </StyledWrapper>
  );
};
