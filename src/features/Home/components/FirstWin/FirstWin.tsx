import { EForces } from "@/common/types";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { images, rowsData } from "./data";
import { PixiSlider } from "./PixiSlider";
import {
  StyledBackground,
  StyledCardOverlay,
  StyledContainer,
  StyledImage,
  StyledList,
  StyledText,
  StyledWrapper,
} from "./styles";

export const FirstWin = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState<EForces>(EForces.CLOSE);
  const keys = Object.keys(rowsData) as EForces[];

  const renderCards = () =>
    keys.map((force) => (
      <StyledCardOverlay
        id={force}
        key={force}
        $isActive={active === force}
        onClick={() => {
          setActive(force);
        }}
      >
        <StyledImage src={rowsData[force].icon} alt={rowsData[force].text} />
      </StyledCardOverlay>
    ));

  const renderTitles = () =>
    keys.map((k) => (
      <StyledText $isActive={k === active} key={k}>
        {rowsData[k].text}
      </StyledText>
    ));

  return (
    <StyledWrapper>
      <StyledBackground>
        <PixiSlider images={images} />
      </StyledBackground>
      {renderTitles()}
      <StyledContainer>
        <StyledList>{renderCards()}</StyledList>
      </StyledContainer>
    </StyledWrapper>
  );
};
