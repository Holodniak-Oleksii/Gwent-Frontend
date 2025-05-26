import { useGameStore } from "@/store/game";
import { getUrlImage } from "@/utils/image";
import {
  StyledAbsolute,
  StyledContainer,
  StyledImage,
  StyledList,
  StyledWrapper,
} from "./styles";

export const WeatherContainer = () => {
  const game = useGameStore();
  console.log("game :", game);

  const renderCards = () =>
    game.game?.effects.map((e) => (
      <StyledImage src={getUrlImage(e)} alt={e.ability} />
    ));
  return (
    <StyledWrapper>
      <StyledAbsolute>
        <StyledContainer>
          <StyledList>
            {renderCards()}

            {renderCards()}
            {renderCards()}
            {renderCards()}
          </StyledList>
        </StyledContainer>
      </StyledAbsolute>
    </StyledWrapper>
  );
};
