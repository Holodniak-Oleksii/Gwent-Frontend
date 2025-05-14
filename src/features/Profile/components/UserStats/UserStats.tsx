import { LINK_TEMPLATES } from "@/common/constants";
import { useGetUserStats } from "@/common/hooks/useGetUserStats";
import IconEditAvatar from "@/common/icons/IconEditAvatar";
import IconLogout from "@/common/icons/IconLogout";
import { EModalKey } from "@/common/types";
import { Avatar } from "@/components/shared/Avatar";
import { FirefliesPixi } from "@/components/shared/Fireflies";
import { convertStatsToArray } from "@/features/Profile/components/UserStats/data";
import { useAuthStore } from "@/store/auth";
import { useUserStore } from "@/store/user";
import { useModal } from "@ebay/nice-modal-react";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { StatCard } from "../StatCard";
import {
  StyledAvatarContainer,
  StyledAvatarWrapper,
  StyledColumn,
  StyledContainer,
  StyledDate,
  StyledGrid,
  StyledIcon,
  StyledInfo,
  StyledName,
  StyledOverlay,
  StyledPanel,
  StyledWrapper,
} from "./styles";

export const UserStats = () => {
  const stats = useGetUserStats();
  const navigate = useNavigate();
  const logout = useUserStore((state) => state.logout);
  const removeCredentials = useAuthStore((state) => state.removeCredentials);
  const { show } = useModal(EModalKey.AVATAR_EDIT);

  const onLogOut = () => {
    navigate(LINK_TEMPLATES.HOME());
    logout();
    removeCredentials();
  };

  const renderStats = (secondPart: boolean) =>
    convertStatsToArray(stats)
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
            <StyledIcon onClick={onLogOut}>
              <IconLogout />
            </StyledIcon>
            <StyledIcon onClick={() => show()}>
              <IconEditAvatar />
            </StyledIcon>
          </StyledPanel>
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
        </StyledContainer>
      </StyledWrapper>
    </StyledOverlay>
  );
};
