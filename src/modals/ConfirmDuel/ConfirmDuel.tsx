import { sendMessage } from "@/api/ws/notification";
import IconCoin from "@/common/icons/IconCoin";
import { EOperationNotificationType } from "@/common/types";
import { BaseButton } from "@/components/ui/buttons/BaseButton";
import { TextFiled } from "@/components/ui/inputs/TextFiled";
import { ModalLayout } from "@/layouts/ModalLayout";
import { IModalProps } from "@/modals";
import { StyledForm } from "@/modals/ConfirmDuel/styles";
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
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormFields>();

  const onSubmit = (data: IFormFields) => {
    const callDate = {
      type: EOperationNotificationType.NEW_DUEL,
      data: {
        receiver: nickname,
        rate: data.rate,
      },
    };
    sendMessage(JSON.stringify(callDate));
    hide();
  };

  return (
    <ModalLayout
      open={visible}
      onClose={hide}
      title={t("title.fight")}
      maxWidth={400}
    >
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <TextFiled
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
