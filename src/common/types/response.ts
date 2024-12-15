import { IUserModel } from "@/common/types/models";

export interface IRegistrationResponse {
  user: IUserModel;
  message: string;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface IGetProfileResponse {
  user: IUserModel;
}
