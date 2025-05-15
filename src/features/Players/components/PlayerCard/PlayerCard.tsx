import { RANG_IMAGE } from "@/common/constants/rang";
import { useGetUserStats } from "@/common/hooks/useGetUserStats";
import IconMedal from "@/common/icons/stats/IconMedal";
import { EModalKey } from "@/common/types";
import { TPlayer } from "@/common/types/entity";
import { Avatar } from "@/components/shared/Avatar";
import { BaseButton } from "@/components/ui/buttons/BaseButton";
import theme from "@/theme/theme";
import { useModal } from "@ebay/nice-modal-react";
import { FC } from "react";
import {
  StyledAction,
  StyledCenter,
  StyledContainer,
  StyledDescription,
  StyledIcon,
  StyledIconWrapper,
  StyledName,
  StyledOverlay,
  StyledRang,
  StyledWrapper,
} from "./styles";

interface IPlayerCardProps {
  player: TPlayer;
}
export const PlayerCard: FC<IPlayerCardProps> = ({ player }) => {
  const { show } = useModal(EModalKey.CONFIRM_DUEL);
  const { rang } = useGetUserStats(player);

  const IconRang = RANG_IMAGE[rang];

  return (
    <StyledOverlay>
      <StyledWrapper>
        <StyledContainer>
          <StyledIconWrapper>
            <StyledIcon>
              <Avatar isAva src={player.avatar || ""} percentage={100} />
            </StyledIcon>
            <StyledCenter>
              <IconMedal fill={theme.colors.gold} />
              <StyledDescription>{player.rating}</StyledDescription>
            </StyledCenter>
            <StyledName>{player.nickname}</StyledName>
            <StyledRang>
              <IconRang />
            </StyledRang>
          </StyledIconWrapper>
          <StyledAction>
            <BaseButton variant="outline">More Info</BaseButton>
            <BaseButton onClick={() => show({ nickname: player.nickname })}>
              Challenge
            </BaseButton>
          </StyledAction>
        </StyledContainer>
      </StyledWrapper>
    </StyledOverlay>
  );
};
