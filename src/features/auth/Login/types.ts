import { IUserModel } from "@/common/types";

export interface ILoginFormFields extends Pick<IUserModel, "nickname"> {
  password: string;
}
