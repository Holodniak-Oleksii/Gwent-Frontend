import { useGetCardsQuery } from "@/api/cards";
import { HeroCard } from "@/components/cards/HeroCard";
import { StyledGrid } from "@/features/Home/styles";

export const Home = () => {
  const { data } = useGetCardsQuery();
  return (
    <StyledGrid>
      {data?.cards.map((c) => (
        <HeroCard card={c} key={c.id} isBuy />
      ))}
    </StyledGrid>
  );
};
