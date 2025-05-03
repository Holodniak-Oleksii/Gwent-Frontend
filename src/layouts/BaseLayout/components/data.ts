import { LINK_TEMPLATES } from "@/common/constants";

export const getNavigation = (locale: string, isAuth: boolean) => [
  {
    name: "navigation.market",
    path: LINK_TEMPLATES.MARKET(locale),
  },
  {
    name: "navigation.rules",
    path: LINK_TEMPLATES.RULES(locale),
  },
  {
    name: "navigation.aboutUs",
    path: LINK_TEMPLATES.ABOUT_US(locale),
  },
  {
    name: "navigation.contacts",
    path: LINK_TEMPLATES.CONTACTS(locale),
  },
  ...(isAuth
    ? [
        {
          name: "navigation.players",
          path: LINK_TEMPLATES.PLAYERS(locale),
        },
        { name: "Messages", path: LINK_TEMPLATES.MESSAGES(locale) },
      ]
    : []),
];
