import { useGetProfileByNicknameQuery } from "@/api/auth";
import { useGetMyCardsQuery } from "@/api/cards";
import { LINK_TEMPLATES } from "@/common/constants";
import { IUserModel } from "@/common/types";
import { TPlayer } from "@/common/types/entity";
import { HeroCard } from "@/components/cards/HeroCard";
import { Loader } from "@/components/shared/Loader";
import { Awards } from "@/features/Profile/components/Awards";
import { UserStats } from "@/features/Profile/components/UserStats";
import { useUserStore } from "@/store/user";
import { FC } from "react";
import { Navigate, useParams } from "react-router-dom";
import { StyledContainer, StyledList, StyledWrapper } from "./styles";

interface IPrivateProfileProps {
  user: IUserModel;
}

interface IPublicProfileProps {
  player: TPlayer;
}

interface IGetProfileProps {
  nickname: string;
}

const PrivateProfile: FC<IPrivateProfileProps> = ({ user }) => {
  const { data } = useGetMyCardsQuery();

  const renderHeroCards = () =>
    data?.cards.map((card) => <HeroCard key={card._id} card={card} />);

  return (
    <StyledWrapper>
      <UserStats isMyProfile player={user} />
      <Awards player={user} />
      <StyledContainer>
        <StyledList>{renderHeroCards()}</StyledList>
      </StyledContainer>
    </StyledWrapper>
  );
};

const PublicProfile: FC<IPublicProfileProps> = ({ player }) => {
  return (
    <StyledWrapper>
      <UserStats player={player} />
      <Awards player={player} />
    </StyledWrapper>
  );
};

const GetDetails: FC<IGetProfileProps> = ({ nickname }) => {
  const { data, isError, isLoading } = useGetProfileByNicknameQuery(nickname);

  if (isError) {
    return <Navigate to={LINK_TEMPLATES.HOME()} />;
  }

  if (isLoading || !data?.user) {
    return <Loader />;
  }

  return <PublicProfile player={data.user} />;
};

export const QueryCheck = () => {
  const { nickname } = useParams<{
    nickname: string;
  }>();
  const user = useUserStore((state) => state.user);

  if (!nickname) {
    return <Navigate to={LINK_TEMPLATES.HOME()} />;
  }

  if (nickname === user?.nickname) {
    return <PrivateProfile user={user} />;
  }

  return <GetDetails nickname={nickname} />;
};
