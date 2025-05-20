import IconFlag from "@/common/icons/IconFlag";
import { ECardAbilities, EType, ICardModel } from "@/common/types";
import { Abilities } from "@/components/cards/plugs/Abilities";
import { Force } from "@/components/cards/plugs/Force";
import { Hero } from "@/components/cards/plugs/Hero";
import { Power } from "@/components/cards/plugs/Power";
import { FC } from "react";
import styled, { css } from "styled-components";

interface ILablesProps {
  card: ICardModel;
}
export const StyledWrapper = styled.div`
  position: absolute;
  top: 4px;
  left: 8px;
  display: flex;
  ${({ theme }) => css`
    width: 32px;
    ${theme.media.width.lg} {
      width: 24px;
    }
  `}
`;

export const StyledRelative = styled.div`
  width: 100%;
  transform: translateY(-12px);
  position: relative;
  svg {
    width: 100%;
    height: fit-content;
  }
`;

export const StyledColumn = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(8px);
  width: fit-content;
`;

export const Labels: FC<ILablesProps> = ({ card }) => {
  return (
    <StyledWrapper>
      <StyledRelative>
        <IconFlag fraction={card.fractionId} />
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
