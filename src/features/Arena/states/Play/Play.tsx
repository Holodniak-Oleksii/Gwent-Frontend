import { EModalKey } from "@/common/types";
import { PlayingCard } from "@/components/cards/PlayingCard";
import { IArenaScreen } from "@/features/Arena/states/types";
import { useGameStore } from "@/store/game";
import { useUserStore } from "@/store/user";
import { useModal } from "@ebay/nice-modal-react";
import { FC } from "react";
import { Board } from "./components/Board";
import {
  StyledBoard,
  StyledContainer,
  StyledPlayerInfo,
  StyledPlayers,
  StyledWrapper,
  StylesCards,
} from "./styles";

export const Play: FC<IArenaScreen> = () => {
  const game = useGameStore((state) => state.game);
  const user = useUserStore((state) => state.user);
  const { show } = useModal(EModalKey.APPLY_CARD);
  const renderCards = () =>
    game?.playingCards?.map((c) => (
      <PlayingCard
        key={c.id}
        card={c}
        onClick={() => {
          show({ card: c });
        }}
      />
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
