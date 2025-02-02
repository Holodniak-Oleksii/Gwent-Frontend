import {
  EGameRequestMessageType,
  EModalKey,
  IBoardCard,
  ICardModel,
} from "@/common/types";
import { PlayingCard } from "@/components/cards/PlayingCard";
import { IArenaScreen } from "@/features/Arena/states/types";
import { useGameStore } from "@/store/game";
import { useUserStore } from "@/store/user";
import { useModal } from "@ebay/nice-modal-react";
import { FC, useMemo } from "react";
import { Board } from "./components/Board";
import {
  StyledAvatar,
  StyledBoard,
  StyledCards,
  StyledContainer,
  StyledCounts,
  StyledIndicator,
  StyledPlayerInfo,
  StyledPlayerRow,
  StyledPlayers,
  StyledRoundCircle,
  StyledRoundsList,
  StyledScore,
  StyledWrapper,
  StylesCards,
} from "./styles";

const calculateScore = (boardCards?: IBoardCard[], nickname?: string) => {
  if (!boardCards || !nickname) return 0;

  return boardCards
    .filter((card) => card.ownerNickname === nickname)
    .reduce((acc, cur) => acc + cur.card.power, 0);
};

export const Play: FC<IArenaScreen> = ({ game }) => {
  const gameStore = useGameStore((state) => state.game);
  const user = useUserStore((state) => state.user);
  const { show } = useModal(EModalKey.APPLY_CARD);

  const myScore = useMemo(
    () => calculateScore(gameStore?.boardCards, user?.nickname),
    [gameStore?.boardCards, user?.nickname]
  );
  const enemyScore = useMemo(
    () => calculateScore(gameStore?.boardCards, gameStore?.enemy?.nickname),
    [gameStore?.boardCards, gameStore?.enemy?.nickname]
  );

  const onConfirm = (card: ICardModel) => {
    game.sendMessage(
      JSON.stringify({
        type: EGameRequestMessageType.APPLY_CARD,
        data: { card },
      })
    );
  };

  const onPass = () =>
    game.sendMessage(
      JSON.stringify({
        type: EGameRequestMessageType.PLAYER_PASS,
      })
    );

  const renderCards = () =>
    gameStore?.playingCards?.map((c) => (
      <PlayingCard
        key={c.id}
        card={c}
        onClick={() => {
          show({ card: c, onSubmit: () => onConfirm(c) });
        }}
      />
    ));

  const renderRounds = (isEnemy: boolean) => {
    if (!gameStore?.rounds || !user?.nickname) return null;

    const playerName = isEnemy ? gameStore?.enemy?.nickname : user?.nickname;

    const lose = gameStore.rounds
      .filter((r) => r.winner !== playerName)
      .map(() => true);

    return [...Array(2)].map((_, index) => {
      const isLose = lose[index];

      return <StyledRoundCircle key={index} isLose={isLose} />;
    });
  };

  return (
    <StyledWrapper>
      <StyledPlayers>
        <StyledPlayerInfo>
          <StyledPlayerRow>
            <StyledScore>{enemyScore}</StyledScore>
            <StyledAvatar>
              {gameStore?.enemy?.nickname.substring(0, 1)}
            </StyledAvatar>
            <StyledCounts>
              <p>{gameStore?.enemy?.nickname}</p>
              <StyledCards>
                <span>{gameStore?.enemy?.cardsCount}</span>
                <StyledRoundsList>{renderRounds(true)}</StyledRoundsList>
              </StyledCards>
            </StyledCounts>
          </StyledPlayerRow>
        </StyledPlayerInfo>
        <StyledIndicator>Player {gameStore?.order} move</StyledIndicator>
        <StyledPlayerInfo>
          <button
            disabled={gameStore?.order !== user?.nickname}
            onClick={onPass}
          >
            Pass
          </button>
          <StyledPlayerRow>
            <StyledScore>{myScore}</StyledScore>
            <StyledAvatar>{user?.nickname.substring(0, 1)}</StyledAvatar>
            <StyledCounts>
              <p>{user?.nickname}</p>
              <StyledCards>
                <span>{gameStore?.playingCards.length}</span>
                <StyledRoundsList>{renderRounds(false)}</StyledRoundsList>
              </StyledCards>
            </StyledCounts>
          </StyledPlayerRow>
        </StyledPlayerInfo>
      </StyledPlayers>
      <StyledContainer>
        <StyledBoard>
          <Board />
        </StyledBoard>
        <StylesCards disabled={gameStore?.order !== user?.nickname}>
          {renderCards()}
        </StylesCards>
      </StyledContainer>
    </StyledWrapper>
  );
};
