import { useGetUserStats } from "@/common/hooks/useGetUserStats";
import IconClock from "@/common/icons/IconClock";
import IconCoin from "@/common/icons/IconCoin";
import { FirefliesPixi } from "@/components/shared/Fireflies";
import Image from "@/components/shared/Image";
import { convertStatsToArray } from "@/features/Profile/components/UserStats/data";
import { StatCard } from "../StatCard";
import {
  StyledAvatar,
  StyledAvatarContainer,
  StyledContainer,
  StyledGrid,
  StyledName,
  StyledTextBlock,
  StyledWrapper,
} from "./styles";

export const UserStats = () => {
  const stats = useGetUserStats();

  const renderStats = () =>
    convertStatsToArray(stats).map((item, i) => <StatCard key={i} {...item} />);

  return (
    <StyledWrapper>
      <FirefliesPixi />
      <StyledContainer>
        {renderStats()}

        <StyledAvatarContainer>
          <StyledAvatar>
            <Image src={stats.avatar} alt={`Avatar of ${stats.nickname}`} />
          </StyledAvatar>
          <StyledName>{stats.nickname}</StyledName>
          <StyledGrid>
            <StyledTextBlock>
              <IconCoin />
              <span>{stats.coins}</span>
            </StyledTextBlock>
            <StyledTextBlock>
              <IconClock />
              <span>{stats.createdAt}</span>
            </StyledTextBlock>
          </StyledGrid>
        </StyledAvatarContainer>
      </StyledContainer>
    </StyledWrapper>
  );
};
