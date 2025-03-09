import { LINK_TEMPLATES } from "@/common/constants";

export const getNavigation = (locale: string) => [
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
];
