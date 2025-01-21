import { Item } from "@/features/Messages/Item";
import { useNotificationStore } from "@/store/notifications";
import { StyledContainer, StyledWrapper } from "./styles";

export const Messages = () => {
  const notification = useNotificationStore((state) => state.notifications);
  console.log("notification :", notification);

  return (
    <StyledWrapper>
      <StyledContainer>
        {notification.map((n) => (
          <Item key={n.id} {...n} />
        ))}
      </StyledContainer>
    </StyledWrapper>
  );
};
