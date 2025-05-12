import { useMutationUploadAvatar } from "@/api/auth";
import { BaseButton } from "@/components/ui/buttons/BaseButton";
import { ModalLayout } from "@/layouts/ModalLayout";
import { IModalProps } from "@/modals";
import { StyledContainer } from "@/modals/styles";
import { useUserStore } from "@/store/user";
import { create, useModal } from "@ebay/nice-modal-react";
import { useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";
import Dropzone from "react-dropzone";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { StyledAction, StyledContent, StyledZoom } from "./styles";
interface IAvatarProps {
  avatar: File;
}

export const EditAvatar = create<IModalProps>(({ id }) => {
  const { hide, visible } = useModal(id);
  const editor = useRef<AvatarEditor>(null);
  const user = useUserStore((state) => state.user);
  const [zoom, setZoom] = useState(1);
  const [avatar, setAvatar] = useState<string | null | File>(
    user?.avatar || null
  );
  const { handleSubmit, setValue } = useForm<IAvatarProps>();
  const { mutateAsync } = useMutationUploadAvatar();
  const { t } = useTranslation();

  const onSubmit = async (data: IAvatarProps) => {
    await mutateAsync(data.avatar);
    hide();
  };

  const getEditedImageAsFile = () => {
    if (editor.current) {
      const canvas = editor.current.getImage();
      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], "avatar.png", { type: "image/png" });
          setValue("avatar", file);
        }
      }, "image/png");
    }
  };

  return (
    <ModalLayout open={visible} onClose={hide} bgcolor="transparent">
      <StyledContainer>
        <StyledContent onSubmit={handleSubmit(onSubmit)}>
          <Dropzone onDrop={(files) => setAvatar(files[0])} noClick noKeyboard>
            {({ getRootProps }) => (
              <div {...getRootProps()}>
                <AvatarEditor
                  width={250}
                  height={250}
                  image={avatar || ""}
                  scale={zoom}
                  ref={editor}
                  crossOrigin="anonymous"
                  onImageChange={getEditedImageAsFile}
                />
              </div>
            )}
          </Dropzone>
          <StyledZoom
            type="range"
            min={0}
            max={2}
            step={0.05}
            value={zoom}
            onChange={(e) => setZoom(+e.target.value)}
          />
          <StyledAction>
            <BaseButton type="button" variant="outline" onClick={hide}>
              {t("button.cancel")}
            </BaseButton>
            <BaseButton type="submit">{t("button.apply")}</BaseButton>
          </StyledAction>
        </StyledContent>
      </StyledContainer>
    </ModalLayout>
  );
});
