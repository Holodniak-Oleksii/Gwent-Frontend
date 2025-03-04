import imageHeroes from "@/assets/images/heroes.webp";
import { DecoratedButton } from "@/components/ui/buttons/DecoratedButton";
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
  return (
    <StyledWrapper>
      <StyledContent>
        <CardCarousel />
        <StyledTextContainer>
          <StyledTitle>Gwent</StyledTitle>
          <StyledSubTitle>
            The free card game set in The Witcher universe, where players build
            decks and battle strategically.
          </StyledSubTitle>
          <StyledButtonContainer>
            <DecoratedButton minWidth={180}>Play</DecoratedButton>
          </StyledButtonContainer>
        </StyledTextContainer>
      </StyledContent>
      <StyledImageWrapper>
        <StyledHeroes src={imageHeroes} alt="heroes" />
      </StyledImageWrapper>
    </StyledWrapper>
  );
};
