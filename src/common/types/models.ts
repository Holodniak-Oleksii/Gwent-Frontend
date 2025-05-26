import { ECardAbilities, EFaction, EForces, EType } from "./enums";

export interface IUserModel {
  nickname: string;
  email: string;
  _id: string;
  avatar: string | null;
  wins: number;
  losses: number;
  draws: number;
  cards: string[];
  coins: number;
  createdAt: string;
  rating: number;
}

export interface IFactionModel {
  id: EFaction;
  name: string;
  emblem: string;
}

export interface ICardModel {
  _id: string;
  fractionId: EFaction;
  ability: ECardAbilities | null;
  image: string;
  power: number;
  forces: EForces;
  type: EType;
  price: number;
  isDefault: boolean;
}

export type TStatus = "pending" | "accepted" | "declined";
export interface INotificationModel {
  _id: string;
  rate: number;
  sender: string;
  receiver: string;
  status: TStatus;
  createdAt: Date;
}

export interface IBoardCard {
  card: ICardModel;
  ownerNickname: string;
  position: EForces;
}

export interface IRound {
  winner: string;
  score: {
    [x: string]: number;
  };
}

export interface IEffect {
  row: EForces;
  ability: ECardAbilities;
  type: EType;
  applyTo: string[];
  fractionId: EFaction;
  image: string;
}

export interface IGamePlayer {
  nickname: string;
  avatar: string | null;
  pass: boolean;
  cardsCount: number;
  leader: ICardModel;
  deckLength: number;
  discards: ICardModel[];
}

export interface IGameModel {
  leader: ICardModel;
  boardCards: IBoardCard[];
  playingCards: ICardModel[];
  discards: ICardModel[];
  deck: ICardModel[];
  order: string;
  rounds: IRound[];
  winner: string | null;
  effects: IEffect[];
  enemy?: IGamePlayer;
}
