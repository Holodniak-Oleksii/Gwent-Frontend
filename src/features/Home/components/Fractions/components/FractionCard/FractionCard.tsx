import { useOnClickOutside } from "@/common/hooks/useOnClickOutside";
import { IFractionCard } from "@/features/Home/components/Fractions/types";
import { FC, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  StyledAnglesBottom,
  StyledAnglesTop,
  StyledBackRelative,
  StyledCardRotate,
  StyledContent,
  StyledHeroesRelative,
  StyledHeroRotate,
  StyledImage,
  StyledSubTitle,
  StyledTexts,
  StyledTitle,
  StyledWrapper,
} from "./styles";

export const FractionCard: FC<IFractionCard> = ({
  imageBack,
  imageFront,
  type,
  description,
  title,
}) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <StyledWrapper
      $isOpen={isOpen}
      ref={ref}
      onClick={() => setIsOpen((prev) => !prev)}
    >
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
        <StyledTexts className="texts">
          <StyledTitle type={type}>{t(title)}</StyledTitle>
          <StyledSubTitle>{t(description)}</StyledSubTitle>
        </StyledTexts>
      </StyledContent>
      <StyledAnglesBottom type={type} />
    </StyledWrapper>
  );
};
