import { useGetPlayersQuery } from "@/api/player";
import { EModalKey } from "@/common/types";
import { useModal } from "@ebay/nice-modal-react";
import { StyledGrid, StyledGridItem } from "./styles";

export const Players = () => {
  const { data, isLoading } = useGetPlayersQuery();
  const { show } = useModal(EModalKey.CONFIRM_DUEL);

  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <>
      <StyledGrid>
        {data?.players.map(({ id, nickname }) => (
          <StyledGridItem key={id}>
            <b>{nickname}</b>
            <button onClick={() => show({ nickname })}>call</button>
          </StyledGridItem>
        ))}
      </StyledGrid>
    </>
  );
};
