import { IUserModel } from "@/common/types/models";

export interface IAuthResponse {
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
