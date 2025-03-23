import { EForces } from "@/common/types";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { images, rowsData } from "./data";
import { PixiSlider } from "./PixiSlider";
import {
  StyledBackground,
  StyledCard,
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

  const renderCards = () =>
    (Object.keys(rowsData) as EForces[]).map((force, i) => (
      <StyledCardOverlay
        id={force}
        key={force}
        $isActive={active === force}
        onClick={() => {
          setActive(force);
        }}
      >
        <StyledCard>
          <StyledImage src={rowsData[force].icon} alt={rowsData[force].text} />
        </StyledCard>
      </StyledCardOverlay>
    ));

  return (
    <StyledWrapper>
      <StyledBackground>
        <PixiSlider images={images} />
      </StyledBackground>
      {/* <StyledBackground src={rowsData[active].bg} /> */}
      <StyledText>{rowsData[active].text}</StyledText>
      <StyledContainer>
        <StyledList>{renderCards()}</StyledList>
      </StyledContainer>
    </StyledWrapper>
  );
};
