import i18n from "@/i18n";

export const LINK_TEMPLATES = {
  HOME: (locale = `/${i18n.language}`) => `${locale}`,
  REGISTRATION: (locale = `/${i18n.language}`) => `${locale}/auth/registration`,
  PROFILE: (locale = `/${i18n.language}`) => `${locale}/profile`,
  AUTH: (locale = `/${i18n.language}`) => `${locale}/auth`,
  LOGIN: (locale = `/${i18n.language}`) => `${locale}/auth/login`,
  PLAYERS: (locale = `/${i18n.language}`) => `${locale}/players`,
  MESSAGES: (locale = `/${i18n.language}`) => `${locale}/messages`,
  ARENA: (id: string, locale = `/${i18n.language}`) => `${locale}/arena/${id}`,
};
