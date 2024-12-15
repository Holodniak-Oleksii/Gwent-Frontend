import { TextFiled } from "@/components/inputs/TextFiled";
import { useForm } from "react-hook-form";
import { ILoginFormFields } from "./types";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormFields>();

  const onSubmit = (data: ILoginFormFields) => {
    console.log("data :", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

      <button type="submit">submit</button>
    </form>
  );
};
