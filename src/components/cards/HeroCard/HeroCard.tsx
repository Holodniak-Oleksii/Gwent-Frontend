import { EType, ICardModel } from "@/common/types";
import { Force } from "@/components/cards/HeroCard/components/Force";
import { getUrlImage } from "@/utils/image";
import { FC } from "react";
import { Power } from "./components/Power";
import { StyledImage, StyledLabel, StyledPanel, StyledWrapper } from "./styles";

interface IHeroCardProps {
  card: ICardModel;
}

export const HeroCard: FC<IHeroCardProps> = ({ card }) => {
  return (
    <StyledWrapper>
      <StyledLabel>
        {card.type === EType.UNIT && (
          <>
            <Power power={card.power} />
            <Force force={card.forces} />
          </>
        )}
      </StyledLabel>
      <StyledImage src={getUrlImage(card)} alt={card.image} />
      <StyledPanel>{card.image.replaceAll("-", " ")}</StyledPanel>
    </StyledWrapper>
  );
};
