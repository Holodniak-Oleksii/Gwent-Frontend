import { sendMessage } from "@/api/ws/notification";
import { LINK_TEMPLATES } from "@/common/constants";
import {
  EOperationNotificationType,
  EStatusNotification,
  INotificationModel,
} from "@/common/types";
import { useUserStore } from "@/store/user";
import { formatDate } from "@/utils";
import { FC } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import {
  StyledAction,
  StyledButton,
  StyledDateTime,
  StyledNotificationContainer,
  StyledNotificationFlex,
  StyledNotificationMessage,
  StyledNotificationStatus,
} from "./styles";

export const Item: FC<INotificationModel> = ({
  createdAt,
  _id,
  receiver,
  sender,
  status,
  rate,
}) => {
  const user = useUserStore((state) => state.user);
  const navigation = useNavigate();
  const isOwner = user?.nickname === sender;
  const { t } = useTranslation();

  const onSetStatus = (status: INotificationModel["status"]) => {
    const callDate = {
      type: EOperationNotificationType.RESPOND_DUEL,
      _id,
      status,
    };
    sendMessage(JSON.stringify(callDate));
  };

  return (
    <StyledNotificationContainer>
      <StyledDateTime>{formatDate(createdAt, true)}</StyledDateTime>
      <StyledNotificationFlex>
        <StyledNotificationMessage>
          <Trans
            i18nKey={isOwner ? "message.duel" : "message.challenged"}
            components={{
              b: (
                <Link
                  to={LINK_TEMPLATES.PROFILE(isOwner ? receiver : sender)}
                />
              ),
              span: <span />,
            }}
            values={{
              player: isOwner ? receiver : sender,
              coins: rate,
            }}
          />
        </StyledNotificationMessage>
        <StyledNotificationStatus status={status}>
          {status}
        </StyledNotificationStatus>
      </StyledNotificationFlex>
      {status === "pending" && !isOwner && (
        <StyledAction>
          <StyledButton
            onClick={() => onSetStatus(EStatusNotification.ACCEPTED)}
          >
            {t("button.accept")}
          </StyledButton>
          <StyledButton
            variant="outline"
            onClick={() => onSetStatus(EStatusNotification.DECLINED)}
          >
            {t("button.decline")}
          </StyledButton>
        </StyledAction>
      )}
      {status === "accepted" && (
        <StyledAction>
          <StyledButton onClick={() => navigation(LINK_TEMPLATES.ARENA(_id))}>
            {t("button.join")}
          </StyledButton>
        </StyledAction>
      )}
    </StyledNotificationContainer>
  );
};
