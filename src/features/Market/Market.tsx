import { useGetCardsQuery } from "@/api/cards";
import { HeroCard } from "@/components/cards/HeroCard";
import { StyledContainer, StyledList, StyledWrapper } from "./styles";

export const Market = () => {
  const { data } = useGetCardsQuery();
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledList>
          {data?.cards.map((c) => (
            <HeroCard card={c} key={c._id} isBuy />
          ))}
        </StyledList>
      </StyledContainer>
    </StyledWrapper>
  );
};
