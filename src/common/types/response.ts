import { TPlayer } from "@/common/types/entity";
import { ICardModel, IUserModel } from "@/common/types/models";

export interface IAuthResponse {
  user: IUserModel;
  message: string;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface IAvatarResponse {
  avatar: string;
  message: string;
}

export interface IErrorResponse {
  message: string;
}

export interface IGetProfileResponse {
  user: IUserModel;
}

export interface IGetPlayerResponse {
  user: TPlayer;
}

export interface IGetPlayersResponse {
  players: TPlayer[];
  total: number;
}

export interface IGetCardsResponse {
  cards: ICardModel[];
  total: number;
}

export interface IGetCardIDsResponse {
  user: IUserModel;
}
