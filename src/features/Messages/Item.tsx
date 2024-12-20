import { sendMessage } from "@/api/ws/notification";
import { LINK_TEMPLATES } from "@/common/constants";
import { EOperationNotificationType, INotificationModel } from "@/common/types";
import { useUserStore } from "@/store/user";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledAction,
  StyledDateTime,
  StyledNotificationContainer,
  StyledNotificationFlex,
  StyledNotificationMessage,
  StyledNotificationStatus,
} from "./styles";

export const Item: FC<INotificationModel> = ({
  createdAt,
  id,
  receiver,
  sender,
  status,
}) => {
  const user = useUserStore((state) => state.user);
  const navigation = useNavigate();
  const isOwner = user?.nickname === sender;

  const onSetStatus = (status: INotificationModel["status"]) => {
    const callDate = {
      type: EOperationNotificationType.RESPOND_DUEL,
      id,
      status,
    };
    sendMessage(JSON.stringify(callDate));
  };

  return (
    <StyledNotificationContainer>
      <StyledDateTime>{new Date(createdAt)?.toDateString()}</StyledDateTime>
      <StyledNotificationFlex>
        <StyledNotificationMessage>
          {isOwner
            ? "You send call to " + receiver
            : "You have call from " + sender}
        </StyledNotificationMessage>
        <StyledNotificationStatus>{status}</StyledNotificationStatus>
      </StyledNotificationFlex>
      {status === "pending" && !isOwner && (
        <StyledAction>
          <button onClick={() => onSetStatus("accepted")}>Accept</button>
          <button onClick={() => onSetStatus("declined")}>Decline</button>
        </StyledAction>
      )}
      {status === "accepted" && (
        <StyledAction>
          <button onClick={() => navigation(LINK_TEMPLATES.ARENA(id))}>
            Join
          </button>
        </StyledAction>
      )}
    </StyledNotificationContainer>
  );
};
