import imageCursed from "@/assets/images/abilities/cursed.webp";
import { EType, ICardModel } from "@/common/types";
import { Force } from "@/components/cards/plugs/Force";
import { Power } from "@/components/cards/plugs/Power";
import { getUrlImage } from "@/utils/image";
import { FC } from "react";
import {
  StyledEffectImage,
  StyledImage,
  StyledLabel,
  StyledWrapper,
} from "./styles";

interface IPlayingCardProps {
  card: ICardModel;
  onClick?: () => void;
  isCursed?: boolean;
}

export const PlayingCard: FC<IPlayingCardProps> = ({
  card,
  onClick,
  isCursed,
}) => (
  <StyledWrapper onClick={onClick} className="playing-card">
    <StyledLabel>
      {card.type === EType.UNIT && (
        <>
          <Power power={card.power} />
          <Force force={card.forces} />
        </>
      )}
    </StyledLabel>
    <StyledImage src={getUrlImage(card)} alt={card.image} />
    {isCursed && <StyledEffectImage src={imageCursed} alt="Cursed" />}
  </StyledWrapper>
);
