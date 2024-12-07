import { IUserModel } from "@/common/types";

export interface IRegistrationFormFields
  extends Pick<IUserModel, "email" | "nickname"> {
  password: string;
  confirmPassword: string;
}
