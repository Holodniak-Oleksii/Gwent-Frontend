import { useGetCardsQuery } from "@/api/cards";
import { EFilters } from "@/common/types";
import { HeroCard } from "@/components/cards/HeroCard";
import { FilterCreator } from "@/components/shared/FilterCreator";
import { Loader } from "@/components/shared/Loader";
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
  const { data, isLoading } = useGetCardsQuery();
  return (
    <StyledWrapper>
      <StyledContainer>
        <Banner />
        <div>
          <StyledTitle>Find your cards</StyledTitle>
          <StyledDivider />
        </div>
        <FilterCreator filterKey={EFilters.CARDS} fields={fields} />
        {isLoading ? (
          <Loader height="75vh" />
        ) : (
          <StyledList>
            {data?.cards.map((c) => (
              <HeroCard card={c} key={c._id} isBuy />
            ))}
          </StyledList>
        )}
      </StyledContainer>
    </StyledWrapper>
  );
};
