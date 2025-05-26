import { useGame } from "@/common/hooks/useGame";
import { EGameRequestMessageType, EModalKey, ICardModel } from "@/common/types";
import { PlayingCard } from "@/components/cards/PlayingCard";
import { useGameStore } from "@/store/game";
import { useUserStore } from "@/store/user";
import { useModal } from "@ebay/nice-modal-react";
import { Board } from "./components/Board";
import { Deck } from "./components/Deck";
import { PlayerSection } from "./components/PlayerSection";
import { WeatherContainer } from "./components/WeatherContainer";
import {
  StyledBoard,
  StyledContainer,
  StyledList,
  StyledPlayers,
  StyledWrapper,
  StylesCards,
} from "./styles";

export const Play = () => {
  const { game } = useGame();
  const gameStore = useGameStore((state) => state.game);
  const user = useUserStore((state) => state.user);
  const { show } = useModal(EModalKey.APPLY_CARD);

  const onConfirm = (card: ICardModel) => {
    game.sendMessage(
      JSON.stringify({
        type: EGameRequestMessageType.APPLY_CARD,
        data: { card },
      })
    );
  };

  const renderCards = () =>
    gameStore?.playingCards?.map((c) => (
      <PlayingCard
        key={c._id}
        card={c}
        onClick={() => {
          show({ card: c, onSubmit: (card: ICardModel) => onConfirm(card) });
        }}
      />
    ));

  return (
    <StyledWrapper>
      <StyledPlayers>
        <PlayerSection player={gameStore?.enemy} />
        <WeatherContainer />
        {!!user && (
          <PlayerSection
            isEnemy={false}
            player={{
              avatar: user.avatar,
              nickname: user.nickname,
              leader: gameStore?.leader || ({} as ICardModel),
              cardsCount: gameStore?.playingCards.length || 0,
            }}
          />
        )}
      </StyledPlayers>
      <StyledContainer>
        <StyledBoard>
          <Board />
        </StyledBoard>
        <StylesCards>
          <StyledList disabled={gameStore?.order !== user?.nickname}>
            {renderCards()}
          </StyledList>
        </StylesCards>
      </StyledContainer>
      <Deck />
    </StyledWrapper>
  );
};
