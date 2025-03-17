import { IFractionCard } from "@/features/Home/components/Fractions/types";
import { FC } from "react";
import {
  StyledAnglesBottom,
  StyledAnglesTop,
  StyledBackRelative,
  StyledCardRotate,
  StyledContent,
  StyledHeroesRelative,
  StyledHeroRotate,
  StyledImage,
  StyledWrapper,
} from "./styles";

export const FractionCard: FC<IFractionCard> = ({
  imageBack,
  imageFront,
  type,
}) => {
  return (
    <StyledWrapper>
      <StyledAnglesTop type={type} />
      <StyledContent>
        <StyledHeroRotate type={type} className="expanded">
          <StyledHeroesRelative>
            <StyledImage src={imageFront} alt="fraction" />
          </StyledHeroesRelative>
        </StyledHeroRotate>
        <StyledCardRotate type={type} className="collapsed">
          <StyledBackRelative>
            <StyledImage src={imageBack} alt="fraction" />
          </StyledBackRelative>
        </StyledCardRotate>
      </StyledContent>
      <StyledAnglesBottom type={type} />
    </StyledWrapper>
  );
};
