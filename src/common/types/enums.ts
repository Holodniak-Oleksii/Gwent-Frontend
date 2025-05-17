export enum EFaction {
  KINGDOMS_OF_THE_NORTH = "KINGDOMS_OF_THE_NORTH",
  NILFGAARD = "NILFGAARD",
  SCOIATAEL = "SCOIATAEL",
  MONSTERS = "MONSTERS",
  UNIVERSAL = "UNIVERSAL",
}

export enum EForces {
  CLOSE = "CLOSE",
  RANGED = "RANGED",
  SIEGE = "SIEGE",
  AGILE = "AGILE",
}

export enum ECardAbilities {
  HERO = "HERO",
  HORN = "HORN",
  SPY = "SPY",
  MEDIC = "MEDIC",
  SCORCH = "SCORCH",
  MUSTER = "MUSTER",
  MARDROEME = "MARDROEME",
  DECOY = "DECOY",
  BERSERK = "BERSERK",
  TIGHT_BOND = "TIGHT_BOND",
  MORALE_BOOST = "MORALE_BOOST",
  // WEATHER
  BITING_FROST = "BITING_FROST",
  IMPENETRABLE_FOG = "IMPENETRABLE_FOG",
  TORRENTIAL_RAIN = "TORRENTIAL_RAIN",
  SKELLIGE_STORM = "SKELLIGE_STORM",
  CLEAR_WEATHER = "CLEAR_WEATHER",
  // LEADER
  KING_OF_TEMERIA = "KING_OF_TEMERIA",
  HIS_IMPERIAL_MAJESTY = "HIS_IMPERIAL_MAJESTY",
  PUREBLOOD_ELF = "PUREBLOOD_ELF",
  COMMANDER_OF_THE_RED_RIDERS = "COMMANDER_OF_THE_RED_RIDERS",
}

export enum EType {
  LEADER = "LEADER",
  WEATHER = "WEATHER",
  UNIT = "UNIT",
  SPECIAL = "SPECIAL",
}

export enum QueryKey {
  PROFILE = "PROFILE",
  PLAYER = "PLAYER",
  PLAYERS = "PLAYERS",
  MY_CARDS = "MY_CARDS",
  ALL_CARDS = "ALL_CARDS",
}

export enum ENDPOINTS {
  REGISTRATION = "/users/register",
  LOGIN = "/users/login",
  REFETCH = "/refetch",
  PROFILE = "/users/profile",
  PLAYER = "/users/info/_nickname_",
  PLAYERS = "/users/all",
  MY_CARDS = "/cards/my",
  ALL_CARDS = "/cards",
  BUY_CARDS = "/cards/buy",
  AVATAR = "/users/avatar",
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
  PREPARATION = "preparation",
  PARTNER_SET_DECK = "partnerSetDeck",
  PREPARATION_COMPLETED = "preparationCompleted",
  UPDATE = "update",
  GAME_END = "gameEnd",
}

export enum EGameState {
  PLAYING = "PLAYING",
  WAITING = "WAITING",
  LOADING = "LOADING",
  PREPARATION = "PREPARATION",
  PARTNER_LEFT = "PARTNER_LEFT",
  END = "END",
}

export enum EModalKey {
  CONFIRM_DUEL = "CONFIRM_DUEL",
  APPLY_CARD = "APPLY_CARD",
  RESURRECT = "RESURRECT",
  AVATAR_EDIT = "AVATAR_EDIT",
  BUY_CARD = "BUY_CARD",
}

export enum EGameRequestMessageType {
  UPDATE_CARDS = "updateCards",
  APPLY_CARD = "applyCard",
  PLAYER_PASS = "playerPass",
}

export enum EAvailableLanguage {
  EN = "en",
  DE = "de",
  UK = "uk",
  PL = "pl",
}

export enum EAuthFormID {
  LOGIN = "LOGIN",
  REGISTRATION = "REGISTRATION",
}

export enum EAwards {
  RICH = "RICH",
  PATRON = "PATRON",
  TREASURER = "TREASURER",
  EQUAL_FIGHTER = "EQUAL_FIGHTER",
  IRON_WILL = "IRON_WILL",
  STRATEGY_MASTER = "STRATEGY_MASTER",
  ARENA_LEGEND = "ARENA_LEGEND",
  FIGHTER = "FIGHTER",
  ONE_IN_A_THOUSAND = "ONE_IN_A_THOUSAND",
}
