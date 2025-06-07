import IconFlag from "@/common/icons/IconFlag";
import { ECardAbilities, EFaction, EType, ICardModel } from "@/common/types";
import { Abilities } from "@/components/cards/plugs/Abilities";
import { Force } from "@/components/cards/plugs/Force";
import { Hero } from "@/components/cards/plugs/Hero";
import { Power } from "@/components/cards/plugs/Power";
import { FC } from "react";
import styled from "styled-components";

interface ILablesProps {
  card: ICardModel;
  hasFlag?: boolean;
}
export const StyledWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 2%;
  left: 4%;
  width: 15%;
  height: 98%;
`;

export const StyledRelative = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .flag {
    position: relative;
    top: -8%;
    width: 100%;
    height: 100%;
  }
`;

export const StyledColumn = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 135%;
`;

const universal = [EFaction.NEUTRAL, EFaction.SPECIAL, EFaction.WEATHER];

export const Labels: FC<ILablesProps> = ({ card, hasFlag = true }) => {
  const showFlag =
    hasFlag &&
    !universal.includes(card.fractionId) &&
    card.type !== EType.LEADER;

  return (
    <StyledWrapper>
      <StyledRelative>
        {showFlag && <IconFlag fraction={card.fractionId} />}
        <StyledColumn>
          {card.type === EType.UNIT && (
            <>
              {card.ability === ECardAbilities.HERO ? (
                <Hero power={card.power} />
              ) : (
                <Power power={card.power} />
              )}
              <Force force={card.forces} />
            </>
          )}
          {!!card.ability && <Abilities ability={card.ability} />}
        </StyledColumn>
      </StyledRelative>
    </StyledWrapper>
  );
};
