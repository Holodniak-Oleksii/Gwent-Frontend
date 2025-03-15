import imageHeroes from "@/assets/images/heroes.webp";
import { DecoratedButton } from "@/components/ui/buttons/DecoratedButton";
import { useTranslation } from "react-i18next";
import { CardCarousel } from "./CardCarousel";
import {
  StyledButtonContainer,
  StyledContent,
  StyledHeroes,
  StyledImageWrapper,
  StyledSubTitle,
  StyledTextContainer,
  StyledTitle,
  StyledWrapper,
} from "./styles";

export const Banner = () => {
  const { t } = useTranslation();

  return (
    <StyledWrapper>
      <StyledContent>
        <CardCarousel />
        <StyledTextContainer>
          <StyledTitle>{t("title.gwent")}</StyledTitle>
          <StyledSubTitle>{t("subTitle.advertisement")}</StyledSubTitle>
          <StyledButtonContainer>
            <DecoratedButton minWidth={180}>{t("button.play")}</DecoratedButton>
          </StyledButtonContainer>
        </StyledTextContainer>
      </StyledContent>
      <StyledImageWrapper>
        <StyledHeroes src={imageHeroes} alt="heroes" />
      </StyledImageWrapper>
    </StyledWrapper>
  );
};
