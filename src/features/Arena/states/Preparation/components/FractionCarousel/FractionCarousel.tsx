import IconTriangle from "@/common/icons/IconTriangle";
import { EFaction } from "@/common/types";
import { IMAGE_FRACTION } from "@/features/Arena/states/Preparation/components/FractionCarousel/data";
import { convertText } from "@/utils";
import { MobileOff } from "@/utils/responsive";
import { FC } from "react";
import {
  StyledButtonLeft,
  StyledButtonRight,
  StyledTab,
  StyledWrapper,
} from "./styles";

interface FractionCarouselProps {
  activeFraction: EFaction;
  onChangeFraction: (f: EFaction) => void;
}
const fractions = [
  EFaction.KINGDOMS_OF_THE_NORTH,
  EFaction.MONSTERS,
  EFaction.NILFGAARD,
  EFaction.SCOIATAEL,
];

const getShowIndexes = (activeFraction: EFaction) => {
  const centerIdx = fractions.indexOf(activeFraction);
  const leftIdx = (centerIdx - 1 + fractions.length) % fractions.length;
  const rightIdx = (centerIdx + 1) % fractions.length;
  return [leftIdx, centerIdx, rightIdx];
};

export const FractionCarousel: FC<FractionCarouselProps> = ({
  activeFraction,
  onChangeFraction,
}) => {
  const handleNext = () => {
    const centerIdx = fractions.indexOf(activeFraction);
    const nextIndex = (centerIdx + 1) % fractions.length;
    onChangeFraction(fractions[nextIndex]);
  };

  const handlePrev = () => {
    const centerIdx = fractions.indexOf(activeFraction);
    const prevIndex = (centerIdx - 1 + fractions.length) % fractions.length;
    onChangeFraction(fractions[prevIndex]);
  };

  const renderFractions = () =>
    fractions.map((f, idx) => {
      const indexes = getShowIndexes(activeFraction);
      return (
        <StyledTab
          key={f}
          $isActive={f === activeFraction}
          onClick={() => onChangeFraction(f)}
          $position={
            idx === indexes[0]
              ? "left"
              : idx === indexes[1]
              ? "center"
              : idx === indexes[2]
              ? "right"
              : "hide"
          }
        >
          <img src={IMAGE_FRACTION[f]} alt={f} />
          {convertText(f)}
        </StyledTab>
      );
    });

  return (
    <StyledWrapper>
      <MobileOff>
        <StyledButtonLeft onClick={handlePrev}>
          <IconTriangle />
        </StyledButtonLeft>
      </MobileOff>
      {renderFractions()}
      <MobileOff>
        <StyledButtonRight onClick={handleNext}>
          <IconTriangle />
        </StyledButtonRight>
      </MobileOff>
    </StyledWrapper>
  );
};
