import { useGame } from "@/common/hooks/useGame";
import { EGameRequestMessageType, ICardModel } from "@/common/types";
import Image from "@/components/shared/Image";
import { BaseButton } from "@/components/ui/buttons/BaseButton";
import { useGameStore } from "@/store/game";
import { convertHexToRgba } from "@/utils/colorUtil";
import { getUrlImage } from "@/utils/image";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import styled, { css } from "styled-components";

interface ILeaderProps {
  card?: ICardModel;
  nickname?: string;
  isEnemy: boolean;
}

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
`;

const StyledContainer = styled.div`
  width: 100px;
  margin: auto;
  ${({ theme }) => css`
    border: 3px solid ${convertHexToRgba(theme.colors.text, 0.1)};
    box-shadow: inset 0px 5px 25px ${theme.colors.focus},
      0px 5px 5px ${theme.colors.focus};
    ${theme.media.width.lg} {
      width: 80px;
    }
  `}
`;

const StyledButton = styled(BaseButton)<{ $isEnemy: boolean }>`
  min-width: 100px;
  margin: auto auto auto 0;
  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
  ${({ theme, $isEnemy }) => css`
    background: ${convertHexToRgba(theme.colors.primary, 0.6)};
    color: ${theme.colors.gold};
    visibility: ${$isEnemy ? "hidden" : "visible"};
    border: 2px solid ${theme.colors.primary};
  `}
`;

export const Leader: FC<ILeaderProps> = ({ card, nickname, isEnemy }) => {
  const { game } = useGame();
  const { t } = useTranslation();
  const gameStore = useGameStore((state) => state.game);

  const onPass = () =>
    game.sendMessage(
      JSON.stringify({
        type: EGameRequestMessageType.PLAYER_PASS,
      })
    );
  return (
    <StyledWrapper>
      <StyledContainer>
        {!!card && <StyledImage src={getUrlImage(card)} alt={card.image} />}
      </StyledContainer>
      <StyledButton
        $isEnemy={isEnemy}
        disabled={isEnemy || gameStore?.order !== nickname}
        onClick={onPass}
      >
        {t("button.pass")}
      </StyledButton>
    </StyledWrapper>
  );
};
