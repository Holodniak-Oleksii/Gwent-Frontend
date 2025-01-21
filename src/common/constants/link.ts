export const LINK_TEMPLATES = {
  HOME: "/",
  REGISTRATION: "/auth/registration",
  PROFILE: "/profile",
  AUTH: "/auth",
  LOGIN: "/auth/login",
  PLAYERS: "/players",
  MESSAGES: "/messages",
  ARENA: (id: string) => `/arena/${id}`,
};
