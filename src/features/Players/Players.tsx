import { useGetPlayersQuery } from "@/api/player";
import { EFilters } from "@/common/types";
import { Banner } from "@/components/shared/Banner";
import { FilterCreator } from "@/components/shared/FilterCreator";
import { Loader } from "@/components/shared/Loader";
import Pagination from "@/components/shared/Pagination/Pagination";
import { useFilterStore } from "@/store/filters";
import { useTranslation } from "react-i18next";
import { PlayerCard } from "./components/PlayerCard";
import { fields } from "./data";
import {
  StyledContainer,
  StyledDivider,
  StyledGrid,
  StyledTitle,
  StyledWrapper,
} from "./styles";

export const Players = () => {
  const { data, isLoading } = useGetPlayersQuery();
  const { t } = useTranslation();
  const filters = useFilterStore((state) => state.filter.PLAYERS);
  const onFilterChange = useFilterStore((state) => state.onChange);

  const renderPlayers = () =>
    data?.players.map((player) => (
      <PlayerCard player={player} key={player._id} />
    ));

  return (
    <StyledWrapper>
      <StyledContainer>
        <Banner />
        <div>
          <StyledTitle>{t("title.findYourPartners")}</StyledTitle>
          <StyledDivider />
        </div>
        <FilterCreator fields={fields(t)} filterKey={EFilters.PLAYERS} />
        {isLoading ? (
          <Loader height="75vh" />
        ) : (
          <>
            <StyledGrid>{renderPlayers()}</StyledGrid>
            <Pagination
              currentPage={filters.page}
              onPageChange={(page) => {
                onFilterChange(EFilters.PLAYERS, { ...filters, page });
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
