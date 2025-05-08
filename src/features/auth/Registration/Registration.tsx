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

const passwordFields = [
  { name: "password", label: "labels.password" },
  { name: "confirmPassword", label: "labels.repeatPassword" },
] as const;

export const Registration = () => {
  const {
    register,
    handleSubmit,
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

  const onSubmit = (data: IRegistrationFormFields) => mutate(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} id={EAuthFormID.REGISTRATION}>
      <TextFiled
        {...register("email", { required: true })}
        placeholder={t("placeholders.email")}
        label={t("labels.email")}
        startIcon={<IconEmail />}
        error={errors.email}
      />
      <TextFiled
        {...register("nickname", { required: true })}
        placeholder={t("placeholders.nickname")}
        label={t("labels.nickname")}
        startIcon={<IconUserProfile />}
        error={errors.nickname}
      />
      {passwordFields.map(({ name, label }) => (
        <TextFiled
          key={name}
          {...register(name, { required: true })}
          placeholder={t(label)}
          label={t(label)}
          startIcon={<IconLock />}
          error={errors[name]}
          endIcon={
            <button
              type="button"
              onClick={() => togglePasswordVisibility(name)}
            >
              {showPass[name] ? <IconEyeOff /> : <IconEye />}
            </button>
          }
          type={showPass[name] ? "password" : "text"}
        />
      ))}
    </StyledForm>
  );
};
