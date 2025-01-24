import { EType, ICardModel } from "@/common/types";
import { Force } from "@/components/cards/plugs/Force";
import { Power } from "@/components/cards/plugs/Power";
import { getUrlImage } from "@/utils/image";
import { FC } from "react";
import { StyledImage, StyledLabel, StyledWrapper } from "./styles";

interface IPlayingCardProps {
  card: ICardModel;
  onClick?: () => void;
}

export const PlayingCard: FC<IPlayingCardProps> = ({ card, onClick }) => {
  return (
    <StyledWrapper onClick={onClick}>
      <StyledLabel>
        {card.type === EType.UNIT && (
          <>
            <Power power={card.power} />
            <Force force={card.forces} />
          </>
        )}
      </StyledLabel>
      <StyledImage src={getUrlImage(card)} alt={card.image} />
    </StyledWrapper>
  );
};
