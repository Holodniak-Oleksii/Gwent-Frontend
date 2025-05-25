import imageCardCount from "@/assets/images/game/icon-card-count.webp";
import imageCrystal from "@/assets/images/game/icon-crystal.webp";
import { IGamePlayer } from "@/common/types";
import { Avatar } from "@/components/shared/Avatar";
import { useGameStore } from "@/store/game";
import { convertText } from "@/utils";
import { FC, useMemo } from "react";
import { Leader } from "./components/Leader";
import { Score } from "./components/Score";
import {
  StyledAvatarWrapper,
  StyledCards,
  StyledCounts,
  StyledRoundCircle,
  StyledRoundsList,
  StyledRow,
  StyledWrapper,
} from "./styles";
interface IPlayerSectionProps {
  player?: IGamePlayer;
  isEnemy?: boolean;
}

export const PlayerSection: FC<IPlayerSectionProps> = ({
  player,
  isEnemy = true,
}) => {
  const gameStore = useGameStore((state) => state.game);

  const score = useMemo(() => {
    if (!gameStore?.boardCards || !player?.nickname) return 0;

    return gameStore?.boardCards
      .filter((card) => card.ownerNickname === player.nickname)
      .reduce((acc, cur) => acc + cur.card.power, 0);
  }, [gameStore?.boardCards, player?.nickname]);

  const renderRounds = () => {
    if (!gameStore?.rounds || !player?.nickname) return null;
    const lose = gameStore.rounds
      .filter((r) => r.winner !== player.nickname)
      .map(() => true);

    return [...Array(2)].map((_, index) => {
      const isLose = lose[index];

      return (
        <StyledRoundCircle src={imageCrystal} key={index} $isLose={isLose} />
      );
    });
  };

  return (
    <StyledWrapper $isEnemy={isEnemy}>
      <Leader
        card={player?.leader}
        nickname={player?.nickname}
        isEnemy={isEnemy}
      />
      <StyledRow $isActive={gameStore?.order === player?.nickname}>
        <Score isEnemy={isEnemy} score={score} />
        <StyledAvatarWrapper>
          <Avatar isAva src={player?.avatar || ""} />
        </StyledAvatarWrapper>
        <StyledCounts>
          <p>{player?.nickname}</p>
          <b>{convertText(player?.leader?.fractionId || "")}</b>
          <StyledCards>
            <img src={imageCardCount} alt="card count" />
            <span>{player?.cardsCount}</span>
            <StyledRoundsList>{renderRounds()}</StyledRoundsList>
          </StyledCards>
        </StyledCounts>
      </StyledRow>
    </StyledWrapper>
  );
};
