import { ModalLayout } from "@/layouts/ModalLayout";
import { IModalProps } from "@/modals";
import { StyledContainer } from "@/modals/styles";
import { create, useModal } from "@ebay/nice-modal-react";

export const EditAvatar = create<IModalProps>(({ id }) => {
  const { hide, visible } = useModal(id);

  return (
    <ModalLayout open={visible} onClose={hide} bgcolor="transparent">
      <StyledContainer></StyledContainer>
    </ModalLayout>
  );
});
