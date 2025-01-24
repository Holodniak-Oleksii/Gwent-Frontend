import { IArenaScreen } from "@/features/Arena/states/types";
import { useGameStore } from "@/store/game";
import { useUserStore } from "@/store/user";
import { getUrlImage } from "@/utils/image";
import { FC } from "react";
import { Board } from "./components/Board";
import {
  StyledBoard,
  StyledCard,
  StyledContainer,
  StyledPlayerInfo,
  StyledPlayers,
  StyledWrapper,
  StylesCards,
} from "./styles";

export const Play: FC<IArenaScreen> = () => {
  const game = useGameStore((state) => state.game);
  const user = useUserStore((state) => state.user);

  const renderCards = () =>
    game?.playingCards?.map((c) => (
      <StyledCard key={c.id} src={getUrlImage(c)} alt={c.image} />
    ));

  return (
    <StyledWrapper>
      <StyledPlayers>
        <StyledPlayerInfo>{game?.enemy?.nickname}</StyledPlayerInfo>
        <StyledPlayerInfo>{user?.nickname}</StyledPlayerInfo>
      </StyledPlayers>
      <StyledContainer>
        <StyledBoard>
          <Board />
        </StyledBoard>
        <StylesCards>{renderCards()}</StylesCards>
      </StyledContainer>
    </StyledWrapper>
  );
};
