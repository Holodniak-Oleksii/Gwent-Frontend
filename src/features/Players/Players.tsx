import { useGetPlayersQuery } from "@/api/player";
import { sendMessage } from "@/api/ws/notification";
import { EOperationNotificationType } from "@/common/types";
import { StyledGrid, StyledGridItem } from "./styles";

export const Players = () => {
  const { data, isLoading } = useGetPlayersQuery();

  const onCall = (nickname: string) => {
    const callDate = {
      type: EOperationNotificationType.NEW_DUEL,
      receiver: nickname,
    };
    sendMessage(JSON.stringify(callDate));
  };
  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <>
      <StyledGrid>
        {data?.players.map(({ id, nickname }) => (
          <StyledGridItem key={id}>
            <b>{nickname}</b>
            <button onClick={() => onCall(nickname)}>call</button>
          </StyledGridItem>
        ))}
      </StyledGrid>
    </>
  );
};
