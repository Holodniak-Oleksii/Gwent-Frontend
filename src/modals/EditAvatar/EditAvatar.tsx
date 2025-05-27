import { useMutationUploadAvatar } from "@/api/auth";
import { BaseButton } from "@/components/ui/buttons/BaseButton";
import { ModalLayout } from "@/layouts/ModalLayout";
import { IModalProps } from "@/modals";
import { useUserStore } from "@/store/user";
import { create, useModal } from "@ebay/nice-modal-react";
import { useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";
import Dropzone from "react-dropzone";
import { useTranslation } from "react-i18next";
import { StyledAction, StyledContent, StyledZoom } from "./styles";

export const EditAvatar = create<IModalProps>(({ id }) => {
  const { remove, visible } = useModal(id);
  const editor = useRef<AvatarEditor>(null);
  const [isLoading, setIsLoading] = useState(false);
  const user = useUserStore((state) => state.user);
  const [zoom, setZoom] = useState(1);
  const [avatar, setAvatar] = useState<string | File | null>(
    user?.avatar || null
  );
  const { mutateAsync } = useMutationUploadAvatar();
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editor.current) return;
    setIsLoading(true);
    const canvas = editor.current.getImage();

    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob((b) => resolve(b), "image/png")
    );

    if (!blob) return;

    const file = new File([blob], "avatar.png", { type: "image/png" });

    await mutateAsync(file);
    setIsLoading(false);
    remove();
  };

  return (
    <ModalLayout open={visible} onClose={remove} maxWidth={"332px"}>
      <StyledContent onSubmit={handleSubmit}>
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
          <BaseButton type="button" variant="outline" onClick={remove}>
            {t("button.cancel")}
          </BaseButton>
          <BaseButton type="submit" disabled={isLoading}>
            {t("button.apply")}
          </BaseButton>
        </StyledAction>
      </StyledContent>
    </ModalLayout>
  );
});
