import { useLoginMutation } from "@/api/auth";
import IconEye from "@/common/icons/IconEye";
import IconEyeOff from "@/common/icons/IconEyeOff";
import IconLock from "@/common/icons/IconLock";
import IconUserProfile from "@/common/icons/IconUserProfile";
import { EAuthFormID } from "@/common/types";
import { TextFiled } from "@/components/ui/inputs/TextFiled";
import { StyledForm } from "@/features/auth/styles";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ILoginFormFields } from "./types";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormFields>();
  const [showPass, setShowPass] = useState(false);
  const { mutate } = useLoginMutation();
  const { t } = useTranslation();

  const onSubmit = (data: ILoginFormFields) => {
    mutate(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} id={EAuthFormID.LOGIN}>
      <TextFiled
        {...register("nickname", { required: true })}
        placeholder={t("placeholders.nickname")}
        label={t("labels.nickname")}
        startIcon={<IconUserProfile />}
        error={errors.nickname}
      />
      <TextFiled
        {...register("password", { required: true })}
        placeholder={t("placeholders.password")}
        label={t("labels.password")}
        startIcon={<IconLock />}
        endIcon={
          <button type="button" onClick={() => setShowPass((prev) => !prev)}>
            {showPass ? <IconEyeOff /> : <IconEye />}
          </button>
        }
        type={showPass ? "password" : "text"}
        error={errors.password}
      />
    </StyledForm>
  );
};
