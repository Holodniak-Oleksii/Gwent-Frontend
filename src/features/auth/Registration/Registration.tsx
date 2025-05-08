import { useRegistrationMutation } from "@/api/auth";
import IconEmail from "@/common/icons/IconEmail";
import IconEye from "@/common/icons/IconEye";
import IconEyeOff from "@/common/icons/IconEyeOff";
import IconLock from "@/common/icons/IconLock";
import IconUserProfile from "@/common/icons/IconUserProfile";
import { EAuthFormID } from "@/common/types";
import { TextFiled } from "@/components/ui/inputs/TextFiled";
import { IRegistrationFormFields } from "@/features/auth/Registration/types";
import { StyledForm } from "@/features/auth/styles";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<IRegistrationFormFields>();

  const [showPass, setShowPass] = useState({
    password: false,
    confirmPassword: false,
  });

  const { mutate } = useRegistrationMutation();
  const { t } = useTranslation();

  const togglePasswordVisibility = (field: keyof typeof showPass) => {
    setShowPass((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const onSubmit = (data: IRegistrationFormFields) => mutate(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} id={EAuthFormID.REGISTRATION}>
      <TextFiled
        {...register("email", {
          required: t("errors.required"),
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: t("errors.invalidEmail"),
          },
        })}
        placeholder={t("placeholders.email")}
        label={t("labels.email")}
        startIcon={<IconEmail />}
        error={errors.email}
      />
      <TextFiled
        {...register("nickname", {
          required: t("errors.required"),
          pattern: {
            value: /^[a-zA-Z0-9]+$/,
            message: t("errors.invalidNickname"),
          },
        })}
        placeholder={t("placeholders.nickname")}
        label={t("labels.nickname")}
        startIcon={<IconUserProfile />}
        error={errors.nickname}
      />
      <TextFiled
        {...register("password", {
          required: t("errors.required"),
          minLength: {
            value: 6,
            message: t("errors.passwordTooShort"),
          },
          validate: () =>
            confirmPassword === undefined ||
            password === confirmPassword ||
            t("errors.passMissMatch"),
        })}
        placeholder={t("labels.password")}
        label={t("labels.password")}
        startIcon={<IconLock />}
        error={errors.password}
        endIcon={
          <button
            type="button"
            onClick={() => togglePasswordVisibility("password")}
          >
            {showPass.password ? <IconEye /> : <IconEyeOff />}
          </button>
        }
        type={showPass.password ? "text" : "password"}
      />
      <TextFiled
        {...register("confirmPassword", {
          required: t("errors.required"),
          minLength: {
            value: 6,
            message: t("errors.passwordTooShort"),
          },
          validate: (value) => value === password || t("errors.passMissMatch"),
        })}
        placeholder={t("labels.repeatPassword")}
        label={t("labels.repeatPassword")}
        startIcon={<IconLock />}
        error={errors.confirmPassword}
        endIcon={
          <button
            type="button"
            onClick={() => togglePasswordVisibility("confirmPassword")}
          >
            {showPass.confirmPassword ? <IconEye /> : <IconEyeOff />}
          </button>
        }
        type={showPass.confirmPassword ? "text" : "password"}
        onBlur={() => trigger("password")}
      />
    </StyledForm>
  );
};
