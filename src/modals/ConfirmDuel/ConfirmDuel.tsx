import { sendMessage } from "@/api/ws/notification";
import IconCoin from "@/common/icons/IconCoin";
import { EOperationNotificationType } from "@/common/types";
import { BaseButton } from "@/components/ui/buttons/BaseButton";
import { TextField } from "@/components/ui/inputs/TextField";
import { ModalLayout } from "@/layouts/ModalLayout";
import { IModalProps } from "@/modals";
import { StyledForm } from "@/modals/ConfirmDuel/styles";
import { useUserStore } from "@/store/user";
import { toast } from "@/utils/toast";
import { create, useModal } from "@ebay/nice-modal-react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface IFormFields {
  rate: string;
}

interface IConfirmDuelProps extends IModalProps {
  nickname: string;
}

export const ConfirmDuel = create<IConfirmDuelProps>(({ id, nickname }) => {
  const { hide, visible } = useModal(id);
  const user = useUserStore((state) => state.user);
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormFields>();

  const onSubmit = (data: IFormFields) => {
    if (!user) return;
    if (+data.rate > user.coins) {
      toast.error("errors.notEnoughMoney");
    } else {
      const callDate = {
        type: EOperationNotificationType.NEW_DUEL,
        data: {
          receiver: nickname,
          rate: data.rate,
        },
      };
      sendMessage(JSON.stringify(callDate));
      hide();
    }
  };

  return (
    <ModalLayout
      open={visible}
      onClose={hide}
      title={t("title.fight")}
      maxWidth={"400px"}
    >
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("rate", { required: true })}
          placeholder={t("placeholders.rate")}
          label={t("labels.rate")}
          startIcon={<IconCoin />}
          error={errors.rate}
          type="number"
        />
        <BaseButton type="submit">{t("button.confirm")}</BaseButton>
      </StyledForm>
    </ModalLayout>
  );
});
