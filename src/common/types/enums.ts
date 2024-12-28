export enum EFaction {
  KINGDOMS_OF_THE_NORTH,
  NILFGAARD,
  SCOIATAEL,
  MONSTERS,
  UNIVERSAL,
}

export enum ECardAbilities {
  HERO,
  EXECUTION,
  HORN,
  SPY,
  MEDIC,
  STRONG_CONNECTION,
  SURGE_OF_STRENGTH,
  DOUBLE,
  AGILITY,
  CALLING_OF_AVENGER,
  MARDREM,
  BERSERK,
}

export enum QueryKey {
  PROFILE = "PROFILE",
  PLAYERS = "PLAYERS",
}

export enum ENDPOINTS {
  REGISTRATION = "/users/register",
  LOGIN = "/users/login",
  REFETCH = "/refetch",
  PROFILE = "/users/profile",
  PLAYERS = "/users/all",
}

export enum EOperationNotificationType {
  RESPOND_DUEL = "respond_duel",
  STORED_DUELS = "stored_duels",
  NEW_DUEL = "new_duel",
}

export enum EGameMessageType {
  WAIT_PARTNER = "waitPartner",
  PARTNER_LEFT = "partnerLeft",
  GAME_START = "gameStart",
}

export enum EGameState {
  PLAYING = "PLAYING",
  WAITING = "WAITING",
  LOADING = "LOADING",
  PARTNER_LEFT = "PARTNER_LEFT",
}
