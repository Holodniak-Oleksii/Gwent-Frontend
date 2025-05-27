import { EFaction, ICardModel } from "@/common/types";
import Image from "@/components/shared/Image";
import { convertHexToRgba } from "@/utils/colorUtil";
import { getUrlImage } from "@/utils/image";
import { FC } from "react";
import styled, { css } from "styled-components";
import { cardFraction } from "./data";

interface IImageProps {
  offset: number;
}

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
`;

const StyledImage = styled(Image)<IImageProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  ${({ offset, theme }) => css`
    transform: translateY(-${offset * 2}px) translateX(-${offset * 2}px);
    box-shadow: 0px 2px 5px ${theme.colors.focus};
  `}
`;

const StyledCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  height: fit-content;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  ${({ theme }) => css`
    ${theme.fontSizes.small};
    color: ${theme.colors.text};
    background-color: ${convertHexToRgba(theme.colors.focus, 0.7)};
  `}
`;

const StyledContainer = styled.div`
  max-width: 100%;
  height: 120px;
  aspect-ratio: 3/4;
  position: relative;
  ${({ theme }) => css`
    border: 3px solid ${convertHexToRgba(theme.colors.text, 0.1)};
    box-shadow: inset 0px 5px 25px ${theme.colors.focus},
      0px 5px 5px ${theme.colors.focus};
  `}
`;

interface ICardsProps {
  deckLength: number;
  fractionId?: EFaction;
  discards: ICardModel[];
}

export const Cards: FC<ICardsProps> = ({
  discards,
  deckLength,
  fractionId,
}) => {
  return (
    <StyledWrapper>
      <StyledContainer>
        {discards
          .slice(-3)
          .reverse()
          .map((discard, i) => (
            <StyledImage
              src={getUrlImage(discard)}
              alt={discard.image}
              key={i}
              offset={i}
            />
          ))}
      </StyledContainer>
      <StyledContainer>
        {!!fractionId && (
          <StyledImage
            offset={0}
            src={cardFraction[fractionId]}
            alt={fractionId}
          />
        )}
        <StyledCount>{deckLength}</StyledCount>
      </StyledContainer>
    </StyledWrapper>
  );
};
