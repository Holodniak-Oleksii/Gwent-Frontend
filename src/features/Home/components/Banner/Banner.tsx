import imageHeroes from "@/assets/images/heroes.webp";
import { DecoratedButton } from "@/components/ui/buttons/DecoratedButton";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const { scrollY } = useScroll();

  const maxScroll = window.innerHeight;
  const progress = useTransform(scrollY, [0, maxScroll], [0, 1]);

  const opacity = useTransform(progress, [0, 1], [1, 0.2]);
  const translate = useTransform(progress, [0, 1], [0, 100]);
  const negativeTranslate = useTransform(progress, [0, 1], [0, -100]);

  return (
    <StyledWrapper as={motion.div} style={{ opacity }}>
      <StyledContent>
        <CardCarousel />
        <StyledTextContainer as={motion.div} style={{ x: negativeTranslate }}>
          <StyledTitle>{t("title.gwent")}</StyledTitle>
          <StyledSubTitle>{t("subTitle.advertisement")}</StyledSubTitle>
          <StyledButtonContainer>
            <DecoratedButton minWidth={180}>{t("button.play")}</DecoratedButton>
          </StyledButtonContainer>
        </StyledTextContainer>
      </StyledContent>
      <StyledImageWrapper as={motion.div} style={{ y: translate }}>
        <StyledHeroes src={imageHeroes} alt="heroes" />
      </StyledImageWrapper>
    </StyledWrapper>
  );
};
