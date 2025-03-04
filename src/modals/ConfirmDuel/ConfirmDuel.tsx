import { sendMessage } from "@/api/ws/notification";
import { EOperationNotificationType } from "@/common/types";
import { TextFiled } from "@/components/ui/inputs/TextFiled";
import { ModalLayout } from "@/layouts/ModalLayout";
import { IModalProps } from "@/modals";
import { StyledForm } from "@/modals/ConfirmDuel/styles";
import { StyledContainer } from "@/modals/styles";
import { create, useModal } from "@ebay/nice-modal-react";
import { useForm } from "react-hook-form";

interface IFormFields {
  rate: string;
}

interface IConfirmDuelProps extends IModalProps {
  nickname: string;
}

export const ConfirmDuel = create<IConfirmDuelProps>(({ id, nickname }) => {
  const { hide, visible } = useModal(id);
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
      title={"Confirm Duel"}
      maxWidth={400}
    >
      <StyledContainer>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <TextFiled
            {...register("rate", { required: true })}
            placeholder="Enter Score"
            error={errors.rate}
            type="number"
          />
          <button type="submit">confirm</button>
        </StyledForm>
      </StyledContainer>
    </ModalLayout>
  );
});
