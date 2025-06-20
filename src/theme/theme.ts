import imageBg from "@/assets/images/background.webp";
import { EFaction } from "@/common/types";
import { getCardWidth } from "@/utils";
import { css, DefaultTheme } from "styled-components";

const defaultPalette: DefaultTheme["colors"] = {
  primary: "#1f2326",
  focus: "#090a0b",
  secondary: "#16cc8f",
  text: "#FEFEFE",
  border: "rgba(223, 228, 248, 0.05)",
  gold: "#f1ca64",
  error: "#f16767",
  placeholder: "rgba(40, 41, 47, 1)",
  bgcolor: "rgba(25,26,30,255)",
  bgneon: "rgba(25, 26, 30, 0.6)",
  bgneonLight: "#16cc8f1c",
  lightText: "#c0c0c0",
  fraction: {
    [EFaction.KINGDOMS_OF_THE_NORTH]: "#0661ea",
    [EFaction.MONSTERS]: "#9b021e",
    [EFaction.NILFGAARD]: "#222322",
    [EFaction.SCOIATAEL]: "#328d09",
    [EFaction.NEUTRAL]: "#2dd1ff",
    [EFaction.SPECIAL]: "#2dd1ff",
    [EFaction.WEATHER]: "#2dd1ff",
  },
};

export const breakpoints = {
  xlg: 1920,
  lg: 1620,
  md: 1280,
  sm: 1024,
  xs: 768,
  xxs: 540,
};

const media = {
  width: {
    xlg: `@media screen and (max-width: ${breakpoints.xlg}px)`,
    lg: `@media screen and (max-width: ${breakpoints.lg}px)`,
    md: `@media screen and (max-width: ${breakpoints.md}px)`,
    sm: `@media screen and (max-width: ${breakpoints.sm}px)`,
    xs: `@media screen and (max-width: ${breakpoints.xs}px)`,
    xxs: `@media screen and (max-width: ${breakpoints.xxs}px)`,
  },
};

const theme: DefaultTheme = {
  colors: defaultPalette,
  media,
  overflow: `
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
  `,
  getLineClamp: (lines = 4) =>
    `
    display: -webkit-box;
    -webkit-line-clamp: ${lines};
    -webkit-box-orient: vertical;
    overflow: hidden;
  `,
  common: {
    secondFontFamily: 'font-family: "HalisGR", sans-serif',
    bgTexture: `background: url(${imageBg}) center top repeat;`,
    textShadow: `text-shadow: 1px 0 ${defaultPalette.focus}, -1px 0 ${defaultPalette.focus}, 0 1px ${defaultPalette.focus}, 0 -1px ${defaultPalette.focus},
    1px 1px ${defaultPalette.focus}, -1px -1px ${defaultPalette.focus}, 1px -1px ${defaultPalette.focus}, -1px 1px ${defaultPalette.focus};`,
    grid: css`
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      gap: 16px;
      & > div {
        width: ${getCardWidth("16px", 7)};
        ${media.width.lg} {
          width: ${getCardWidth("16px", 6)};
        }
        ${media.width.md} {
          width: ${getCardWidth("16px", 5)};
        }
        ${media.width.sm} {
          width: ${getCardWidth("16px", 4)};
        }
        ${media.width.xs} {
          width: ${getCardWidth("16px", 3)};
        }
        ${media.width.xxs} {
          width: ${getCardWidth("16px", 2)};
        }
      }
    `,
  },
  spacing: {
    content: css`
      margin: 0 auto;
      padding: 0 100px;
      max-width: 1920px;
      ${media.width.lg} {
        padding: 0 80px;
      }
      ${media.width.md} {
        padding: 0 60px;
      }
      ${media.width.sm} {
        padding: 0 32px;
      }
      ${media.width.xs} {
        padding: 0 16px;
      }
    `,
    layout: css`
      padding-top: 120px;
      padding-bottom: 120px;

      ${media.width.lg} {
        padding-top: 100px;
        padding-bottom: 100px;
      }
      ${media.width.xxs} {
        padding-top: 88px;
        padding-bottom: 88px;
      }
    `,
    indents: css`
      padding-top: 120px;
      padding-bottom: 120px;

      ${media.width.lg} {
        padding-top: 100px;
        padding-bottom: 100px;
      }
      ${media.width.md} {
        padding-top: 80px;
        padding-bottom: 80px;
      }
      ${media.width.sm} {
        padding-top: 64px;
        padding-bottom: 64px;
      }
      ${media.width.xs} {
        padding-top: 44px;
        padding-bottom: 44px;
      }
    `,
  },

  fontSizes: {
    extra: `
      font-size: 120px;
      ${media.width.lg} {
        font-size: 100px;
      }
      ${media.width.sm} {
        font-size: 80px;
      }
      ${media.width.xs} {
        font-size: 64px;
      }
    `,
    largeTitle: `
      font-size: 80px;
      ${media.width.lg} {
        font-size: 64px;
      }
      ${media.width.sm} {
        font-size: 44px;
      }
    `,
    large: `
      font-size: 56px;
      ${media.width.lg} {
        font-size: 44px;
      }
      ${media.width.sm} {
        font-size: 32px;
      }
      ${media.width.xs} {
        font-size: 28px;
      }
      ${media.width.xxs} {
        font-size: 24px;
      }
    `,
    big: `
      font-size: 28px;
      ${media.width.lg} {
        font-size: 24px;
      }
      ${media.width.sm} {
        font-size: 20px;
      }
    `,
    regular: `
      font-size: 24px;
      ${media.width.lg} {
        font-size: 20px;
      };
      ${media.width.md} {
        font-size: 18px;
      }
      ${media.width.xxs} {
        font-size: 16px;
      }
    `,
    medium: `
      font-size: 18px;
      ${media.width.lg} {
        font-size: 16px;
      };
      ${media.width.md} {
        font-size: 14px;
      }
      ${media.width.xs} {
        font-size: 12px;
      }
    `,
    small: `
      font-size: 14px;
      ${media.width.lg} {
        font-size: 12px;
      };
      ${media.width.md} {
        font-size: 10px;
      }
     ${media.width.xs} {
        font-size: 8px;
      }
    `,
  },
};

export default theme;
