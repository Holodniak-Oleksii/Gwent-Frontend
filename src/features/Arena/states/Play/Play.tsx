import { useGame } from "@/common/hooks/useGame";
import { EModalKey, ICardModel } from "@/common/types";
import { PlayingCard } from "@/components/cards/PlayingCard";
import { SunLightEffectPixi } from "@/components/effects/SunRays";
import { TransitionOverlay } from "@/components/effects/TransitionOverlay";
import { useGameStore } from "@/store/game";
import { useUserStore } from "@/store/user";
import { useModal } from "@ebay/nice-modal-react";
import { useEffect, useState } from "react";
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
  const [visible, setVisible] = useState(false);

  const renderCards = () =>
    gameStore?.playingCards?.map(
      (c) =>
        !!c && (
          <PlayingCard
            key={c._id}
            card={c}
            onClick={() => {
              show({
                card: c,
                onSubmit: (data: string) => {
                  game.sendMessage(data);
                },
              });
            }}
          />
        )
    );

  useEffect(() => {
    if (gameStore?.showSunRays) {
      setVisible(true);
      setTimeout(() => setVisible(false), 2000);
    }
  }, [gameStore?.showSunRays]);

  return (
    <StyledWrapper>
      <TransitionOverlay open={visible} inTime={100}>
        <SunLightEffectPixi />
      </TransitionOverlay>
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
