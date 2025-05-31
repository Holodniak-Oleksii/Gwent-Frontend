import i18n from "@/i18n";

const getPath = (path: string, locale?: string) => {
  const prefix =
    locale === undefined ? `/${i18n.language}/` : locale ? `/${locale}/` : "";
  return `${prefix}${path}`;
};

export const LINK_TEMPLATES = {
  HOME: (locale?: string) => getPath("", locale),
  REGISTRATION: (locale?: string) => getPath("auth/registration", locale),
  PROFILE: (nickname: string, locale?: string) =>
    getPath(`profile/${nickname}`, locale),
  AUTH: (locale?: string) => getPath("auth", locale),
  LOGIN: (locale?: string) => getPath("auth/login", locale),
  PLAYERS: (locale?: string) => getPath("players", locale),
  MESSAGES: (locale?: string) => getPath("messages", locale),
  MARKET: (locale?: string) => getPath("market", locale),
  RULES: (locale?: string) => getPath("rules", locale),
  ABOUT_US: (locale?: string) => getPath("about-us", locale),
  CONTACTS: (locale?: string) => getPath("contacts", locale),
  ARENA: (id: string, locale?: string) => getPath(`arena/${id}`, locale),
  REFILL: (locale?: string) => getPath(`refill`, locale),
};
