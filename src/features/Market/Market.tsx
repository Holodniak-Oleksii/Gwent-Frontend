import { useGetCardsQuery } from "@/api/cards";
import { EFilters } from "@/common/types";
import { HeroCard } from "@/components/cards/HeroCard";
import { Banner } from "@/components/shared/Banner";
import { FilterCreator } from "@/components/shared/FilterCreator";
import { Loader } from "@/components/shared/Loader";
import Pagination from "@/components/shared/Pagination/Pagination";
import { useFilterStore } from "@/store/filters";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const filters = useFilterStore((state) => state.filter.CARDS);
  const onFilterChange = useFilterStore((state) => state.onChange);

  return (
    <StyledWrapper>
      <StyledContainer>
        <Banner />
        <div>
          <StyledTitle>{t("title.findYourCards")}</StyledTitle>
          <StyledDivider />
        </div>
        <FilterCreator filterKey={EFilters.CARDS} fields={fields(t)} />
        {isLoading ? (
          <Loader height="75vh" />
        ) : (
          <>
            <StyledList>
              {data?.cards.map((c) => (
                <HeroCard card={c} key={c._id} isBuy />
              ))}
            </StyledList>
            <Pagination
              currentPage={filters.page}
              onPageChange={(page) => {
                onFilterChange(EFilters.CARDS, { ...filters, page });
              }}
              pageSize={filters.size}
              totalCount={data?.total || 0}
            />
          </>
        )}
      </StyledContainer>
    </StyledWrapper>
  );
};
