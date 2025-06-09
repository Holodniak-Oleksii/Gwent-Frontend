import { closeNotificationManager } from "@/api/ws/notification";
import { LINK_TEMPLATES } from "@/common/constants";
import { useGetUserStats } from "@/common/hooks/useGetUserStats";
import IconEditAvatar from "@/common/icons/IconEditAvatar";
import IconLogout from "@/common/icons/IconLogout";
import IconWallet from "@/common/icons/IconWallet";
import { EModalKey } from "@/common/types";
import { TPlayer } from "@/common/types/entity";
import { StatCard } from "@/components/cards/StatCard";
import { Avatar } from "@/components/shared/Avatar";
import { FirefliesPixi } from "@/components/shared/Fireflies";
import { BaseButton } from "@/components/ui/buttons/BaseButton";
import { convertStatsToArray } from "@/features/Profile/components/UserStats/data";
import { useAuthStore } from "@/store/auth";
import { useUserStore } from "@/store/user";
import { useModal } from "@ebay/nice-modal-react";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import {
  StyledAvatarContainer,
  StyledAvatarWrapper,
  StyledColumn,
  StyledContainer,
  StyledCover,
  StyledDate,
  StyledGrid,
  StyledIcon,
  StyledInfo,
  StyledName,
  StyledOverlay,
  StyledPanel,
  StyledRow,
  StyledWrapper,
} from "./styles";

interface IUserStatsProps {
  player: TPlayer;
  isMyProfile?: boolean;
}

export const UserStats: FC<IUserStatsProps> = ({
  player,
  isMyProfile = false,
}) => {
  const stats = useGetUserStats(player);
  const navigate = useNavigate();
  const logout = useUserStore((state) => state.logout);
  const removeCredentials = useAuthStore((state) => state.removeCredentials);
  const { show } = useModal(EModalKey.AVATAR_EDIT);
  const { show: showChallenge } = useModal(EModalKey.CONFIRM_DUEL);
  const { t } = useTranslation();

  const onLogOut = () => {
    navigate(LINK_TEMPLATES.HOME());
    logout();
    removeCredentials();
    closeNotificationManager();
  };

  const renderStats = (secondPart: boolean) =>
    convertStatsToArray(stats, t)
      .slice(secondPart ? 3 : 0, secondPart ? 6 : 3)
      .map((item, i) => (
        <Fragment key={i}>
          <StatCard {...item} />
          <hr />
        </Fragment>
      ));

  return (
    <StyledOverlay>
      <StyledWrapper>
        <StyledContainer>
          <StyledPanel>
            <FirefliesPixi />
            {isMyProfile && (
              <>
                <StyledIcon onClick={onLogOut}>
                  <IconLogout />
                </StyledIcon>
                <StyledIcon onClick={() => show()}>
                  <IconEditAvatar />
                </StyledIcon>
                <StyledIcon as={Link} to={LINK_TEMPLATES.REFILL()}>
                  <IconWallet />
                </StyledIcon>
              </>
            )}
          </StyledPanel>
          <StyledCover>
            <StyledInfo>
              <StyledGrid>{renderStats(false)}</StyledGrid>
              <StyledColumn>
                <StyledAvatarWrapper>
                  <StyledAvatarContainer>
                    <Avatar
                      src={stats.avatar}
                      percentage={stats.winsPercentage}
                    />
                  </StyledAvatarContainer>
                </StyledAvatarWrapper>
                <StyledName>{stats.nickname}</StyledName>
                <StyledDate>{stats.createdAt}</StyledDate>
              </StyledColumn>
              <StyledGrid>{renderStats(true)}</StyledGrid>
            </StyledInfo>
            {!isMyProfile && (
              <StyledRow>
                <BaseButton
                  onClick={() => showChallenge({ nickname: player.nickname })}
                >
                  {t("button.challenge")}
                </BaseButton>
              </StyledRow>
            )}
          </StyledCover>
        </StyledContainer>
      </StyledWrapper>
    </StyledOverlay>
  );
};
