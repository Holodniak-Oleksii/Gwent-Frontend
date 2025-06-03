import { useGetPlayersQuery } from "@/api/player";
import { EFilters } from "@/common/types";
import { FilterCreator } from "@/components/shared/FilterCreator";
import { Loader } from "@/components/shared/Loader";
import { PlayerCard } from "./components/PlayerCard";
import { fields } from "./data";
import { StyledContainer, StyledGrid, StyledWrapper } from "./styles";

export const Players = () => {
  const { data, isLoading } = useGetPlayersQuery();

  if (isLoading) {
    return <Loader />;
  }

  const renderPlayers = () =>
    data?.players.map((player) => (
      <PlayerCard player={player} key={player._id} />
    ));

  return (
    <StyledWrapper>
      <StyledContainer>
        <FilterCreator fields={fields} filterKey={EFilters.PLAYERS} />
        <StyledGrid>{renderPlayers()}</StyledGrid>
      </StyledContainer>
    </StyledWrapper>
  );
};
