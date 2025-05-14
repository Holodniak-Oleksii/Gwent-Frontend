import { useGetMyCardsQuery } from "@/api/cards";
import { HeroCard } from "@/components/cards/HeroCard";
import { Awards } from "@/features/Profile/components/Awards";
import { UserStats } from "@/features/Profile/components/UserStats";
import { StyledContainer, StyledList, StyledWrapper } from "./styles";

export const Profile = () => {
  const { data } = useGetMyCardsQuery();

  const renderHeroCards = () =>
    data?.cards.map((card) => <HeroCard key={card.id} card={card} />);

  return (
    <StyledWrapper>
      <UserStats />
      <Awards />
      <StyledContainer>
        <StyledList>{renderHeroCards()}</StyledList>
      </StyledContainer>
    </StyledWrapper>
  );
};
