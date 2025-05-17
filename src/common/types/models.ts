import { ECardAbilities, EFaction, EForces, EType } from "./enums";

export interface IUserModel {
  nickname: string;
  email: string;
  id: string;
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
  id: string;
  fractionId: EFaction;
  ability: ECardAbilities | null;
  image: string;
  power: number;
  forces: EForces;
  type: EType;
  price: number;
  isDefault: boolean;
}

export interface INotificationModel {
  id: string;
  rate: number;
  sender: string;
  receiver: string;
  status: "pending" | "accepted" | "declined";
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
}

export interface IGameModel {
  boardCards: IBoardCard[];
  playingCards: ICardModel[];
  discards: ICardModel[];
  deck: ICardModel[];
  order: string;
  rounds: IRound[];
  winner: string | null;
  effects: IEffect[];
  enemy?: {
    nickname: string;
    avatar: string;
    pass: boolean;
    cardsCount: number;
  };
}
