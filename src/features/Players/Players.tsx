import { useGetPlayersQuery } from "@/api/player";
import { sendMessage } from "@/api/ws/notification";
import { EOperationNotificationType } from "@/common/types";
import { useNotificationStore } from "@/store/notifications";
import { StyledGrid, StyledGridItem } from "./styles";

export const Players = () => {
  const { data, isLoading } = useGetPlayersQuery();
  const notification = useNotificationStore((state) => state.notifications);
  console.log("notification :", notification);
  console.log("data :", data);

  const onCall = (nickname: string) => {
    const callDate = {
      type: EOperationNotificationType.SENT_DUEL,
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
      <hr />
      {notification?.map((n) => (
        <>
          you have call from {n.sender} in status {n.status}
        </>
      ))}
    </>
  );
};
