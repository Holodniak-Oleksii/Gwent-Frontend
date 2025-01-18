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

export interface IErrorResponse {
  message: string;
}

export interface IGetProfileResponse {
  user: IUserModel;
}

export interface IGetPlayersResponse {
  players: TPlayer[];
}

export interface IGetCardsResponse {
  cards: ICardModel[];
}
