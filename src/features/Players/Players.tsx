import { useGetPlayersQuery } from "@/api/player";
import { PlayerCard } from "./components/PlayerCard";
import { StyledGrid, StyledWrapper } from "./styles";
import { Loader } from "@/components/shared/Loader";

export const Players = () => {
  const { data, isLoading } = useGetPlayersQuery();

  if (isLoading) {
    return <Loader />;
  }

  const renderPlayers = () =>
    data?.players.map((player) => (
      <PlayerCard player={player} key={player.id} />
    ));

  return (
    <StyledWrapper>
      <StyledGrid>{renderPlayers()}</StyledGrid>
    </StyledWrapper>
  );
};
