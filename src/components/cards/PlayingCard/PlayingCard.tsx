import imageCursed from "@/assets/images/abilities/cursed.webp";
import { EType, ICardModel } from "@/common/types";
import { Abilities } from "@/components/cards/plugs/Abilities";
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
  isShowForce?: boolean;
}

export const PlayingCard: FC<IPlayingCardProps> = ({
  card,
  onClick,
  isCursed,
  isShowForce,
}) => (
  <StyledWrapper onClick={onClick} className="playing-card">
    <StyledLabel>
      {card.type === EType.UNIT && (
        <>
          <Power power={card.power} />
          {isShowForce && <Force force={card.forces} />}
          {!!card.ability && <Abilities ability={card.ability} />}
        </>
      )}
    </StyledLabel>
    <StyledImage src={getUrlImage(card)} alt={card.image} />
    {isCursed && <StyledEffectImage src={imageCursed} alt="Cursed" />}
  </StyledWrapper>
);
