import { DecoratedButton } from "@/components/ui/buttons/DecoratedButton";
import { AreaField, TextField } from "@/components/ui/inputs/TextField";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import styled, { css } from "styled-components";

interface IContactFormFields {
  name: string;
  email: string;
  message: string;
}

const StyledWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  .decorated-button {
    transform: translateX(36px);
  }
  ${({ theme }) => css`
    ${theme.media.width.md} {
      align-items: center;
      .decorated-button {
        transform: translateX(0);
      }
    }
  `}
`;

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactFormFields>();
  const { t } = useTranslation();

  const onSubmit = (data: IContactFormFields) => {
    toast.success("Message Sended");
    console.log("data :", data);
  };

  return (
    <StyledWrapper onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register("name", {
          required: t("errors.required"),
        })}
        placeholder={t("placeholders.name")}
        label={t("labels.name")}
        error={errors.name}
      />
      <TextField
        {...register("email", {
          required: t("errors.required"),
        })}
        placeholder={t("placeholders.email")}
        label={t("labels.email")}
        error={errors.email}
      />
      <AreaField
        {...register("message", {
          required: t("errors.required"),
        })}
        placeholder={t("placeholders.message")}
        label={t("labels.message")}
        error={errors.message}
        rows={5}
      />
      <DecoratedButton minWidth={140} type="submit">
        {t("button.submit")}
      </DecoratedButton>
    </StyledWrapper>
  );
};
