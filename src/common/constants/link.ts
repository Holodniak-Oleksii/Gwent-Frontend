export const LINK_TEMPLATES = {
  HOME: "/",
  REGISTRATION: "/auth/registration",
  PROFILE: "/profile",
  AUTH: "/auth",
  LOGIN: "/auth/login",
  PLAYERS: "/players",
  ARENA: (id: string) => `/arena/${id}`,
};
