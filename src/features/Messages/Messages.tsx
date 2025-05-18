import { useNotificationStore } from "@/store/notifications";
import { useTranslation } from "react-i18next";
import { Item } from "./Item";
import { StyledContainer, StyledEmpty, StyledWrapper } from "./styles";

export const Messages = () => {
  const notification = useNotificationStore((state) => state.notifications);
  const { t } = useTranslation();

  return (
    <StyledWrapper>
      <StyledContainer>
        {notification.length ? (
          notification.map((n) => <Item key={n.id} {...n} />)
        ) : (
          <StyledEmpty>{t("message.emptyNotify")}</StyledEmpty>
        )}
      </StyledContainer>
    </StyledWrapper>
  );
};
