import { useGetUserStats } from "@/common/hooks/useGetUserStats";
import { Avatar } from "@/components/shared/Avatar";
import { FirefliesPixi } from "@/components/shared/Fireflies";
import { convertStatsToArray } from "@/features/Profile/components/UserStats/data";
import { Fragment } from "react/jsx-runtime";
import { StatCard } from "../StatCard";
import {
  StyledAvatarContainer,
  StyledAvatarWrapper,
  StyledColumn,
  StyledContainer,
  StyledDate,
  StyledGrid,
  StyledInfo,
  StyledName,
  StyledOverlay,
  StyledPanel,
  StyledWrapper,
} from "./styles";

export const UserStats = () => {
  const stats = useGetUserStats();

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
