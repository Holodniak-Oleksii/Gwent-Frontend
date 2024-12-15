import { useRegistrationMutation } from "@/api/auth";
import { TextFiled } from "@/components/inputs/TextFiled";
import { IRegistrationFormFields } from "@/features/auth/Registration/types";
import { useForm } from "react-hook-form";

export const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationFormFields>();

  const { mutate } = useRegistrationMutation();

  const onSubmit = (data: IRegistrationFormFields) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextFiled
        {...register("email", { required: true })}
        placeholder="Enter player"
        error={errors.email}
      />
      <br />

      <TextFiled
        {...register("nickname", { required: true })}
        placeholder="Enter Nickname"
        error={errors.nickname}
      />
      <br />

      <TextFiled
        {...register("password", { required: true })}
        placeholder="Enter Password"
        error={errors.password}
        type="password"
      />

      <br />
      <TextFiled
        {...register("confirmPassword", { required: true })}
        placeholder="Repeat Password"
        error={errors.confirmPassword}
        type="password"
      />
      <br />

      <button type="submit">submit</button>
    </form>
  );
};
