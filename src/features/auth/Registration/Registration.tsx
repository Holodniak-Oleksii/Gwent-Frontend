import { useRegistrationMutation } from "@/api/auth";
import { LINK_TEMPLATES } from "@/common/constants";
import { TextFiled } from "@/components/inputs/TextFiled";
import { IRegistrationFormFields } from "@/features/auth/Registration/types";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

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
      <TextFiled
        {...register("nickname", { required: true })}
        placeholder="Enter Nickname"
        error={errors.nickname}
      />
      <TextFiled
        {...register("password", { required: true })}
        placeholder="Enter Password"
        error={errors.password}
        type="password"
      />
      <TextFiled
        {...register("confirmPassword", { required: true })}
        placeholder="Repeat Password"
        error={errors.confirmPassword}
        type="password"
      />
      <button type="submit">submit</button>
      <Link to={LINK_TEMPLATES.LOGIN}>Login</Link>
    </form>
  );
};
