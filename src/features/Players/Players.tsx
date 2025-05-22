import { useGetPlayersQuery } from "@/api/player";
import { Loader } from "@/components/shared/Loader";
import { PlayerCard } from "./components/PlayerCard";
import { StyledGrid, StyledWrapper } from "./styles";

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
      <StyledGrid>{renderPlayers()}</StyledGrid>
    </StyledWrapper>
  );
};
