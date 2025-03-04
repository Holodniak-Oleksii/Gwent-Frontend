import { useLoginMutation } from "@/api/auth";
import { LINK_TEMPLATES } from "@/common/constants";
import { TextFiled } from "@/components/ui/inputs/TextFiled";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ILoginFormFields } from "./types";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormFields>();

  const { mutate } = useLoginMutation();

  const onSubmit = (data: ILoginFormFields) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

      <button type="submit">submit</button>
      <Link to={LINK_TEMPLATES.REGISTRATION}>Registration</Link>
    </form>
  );
};
