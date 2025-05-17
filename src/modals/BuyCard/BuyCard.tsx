import { useBuyCardMutation } from "@/api/cards";
import IconCoin from "@/common/icons/IconCoin";
import { ICardModel } from "@/common/types";
import { HeroCard } from "@/components/cards/HeroCard";
import { BaseButton } from "@/components/ui/buttons/BaseButton";
import { ModalLayout } from "@/layouts/ModalLayout";
import { IModalProps } from "@/modals";
import { useUserStore } from "@/store/user";
import theme from "@/theme/theme";
import { toast } from "@/utils/toast";
import { create, useModal } from "@ebay/nice-modal-react";
import { useTranslation } from "react-i18next";
import {
  StyledAction,
  StyledButton,
  StyledContainer,
  StyledContent,
} from "./styles";

interface IApplyProps extends IModalProps {
  card: ICardModel;
}

export const BuyCard = create<IApplyProps>(({ id, card }) => {
  const { hide, visible } = useModal(id);
  const { mutateAsync } = useBuyCardMutation(card.id);
  const { t } = useTranslation();
  const user = useUserStore((state) => state.user);

  const handleBuy = async () => {
    if (!user) return;
    if (card.price > user.coins) {
      toast.warning(t(`message.enoughMoney`));
    } else {
      await mutateAsync();
      hide();
    }
  };

  return (
    <ModalLayout
      title={t("title.buy")}
      maxWidth={360}
      open={visible}
      onClose={hide}
    >
      <StyledContainer>
        <StyledContent>
          <HeroCard card={card} isPreview />
        </StyledContent>
      </StyledContainer>
      <StyledAction>
        <BaseButton variant="outline" onClick={hide}>
          {t("button.cancel")}
        </BaseButton>
        <StyledButton onClick={handleBuy}>
          <IconCoin stroke={theme.colors.primary} />
          {card.price}
        </StyledButton>
      </StyledAction>
    </ModalLayout>
  );
});
