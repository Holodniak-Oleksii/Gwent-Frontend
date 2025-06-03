import { useGetCardsQuery } from "@/api/cards";
import { EFilters } from "@/common/types";
import { HeroCard } from "@/components/cards/HeroCard";
import { FilterCreator } from "@/components/shared/FilterCreator";
import { Banner } from "./components/Banner";
import { fields } from "./data";
import {
  StyledContainer,
  StyledDivider,
  StyledList,
  StyledTitle,
  StyledWrapper,
} from "./styles";

export const Market = () => {
  const { data } = useGetCardsQuery();
  return (
    <StyledWrapper>
      <StyledContainer>
        <Banner />
        <div>
          <StyledTitle>Find your cards</StyledTitle>
          <StyledDivider />
        </div>
        <FilterCreator filterKey={EFilters.CARDS} fields={fields} />
        <StyledList>
          {data?.cards.map((c) => (
            <HeroCard card={c} key={c._id} isBuy />
          ))}
        </StyledList>
      </StyledContainer>
    </StyledWrapper>
  );
};
