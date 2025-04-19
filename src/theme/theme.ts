import imageBg from "@/assets/images/background.webp";
import { css, DefaultTheme } from "styled-components";

const defaultPalette: DefaultTheme["colors"] = {
  primary: "rgba(25,26,30,255)",
  focus: "rgba(9, 10, 11, 1)",
  secondary: "#16cc8f",
  text: "#FEFEFE",
  border: "rgba(223, 228, 248, 0.05)",
  gold: "#f1ca64",
  error: "#c30505",
  placeholder: "rgba(40, 41, 47, 1)",
  bgcolor: "rgba(25,26,30,255)",
  bgneon: "rgba(25, 26, 30, 0.6)",
  bgneonLight: "#16cc8f1c",
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
    bgTexture: `background: url(${imageBg}) center top repeat;`,
    textShadow: `text-shadow: 2px 0 ${defaultPalette.focus}, -2px 0 ${defaultPalette.focus}, 0 2px ${defaultPalette.focus}, 0 -2px ${defaultPalette.focus},
             1px 1px ${defaultPalette.focus}, -1px -1px ${defaultPalette.focus}, 1px -1px ${defaultPalette.focus}, -1px 1px ${defaultPalette.focus};`,
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
    indents: css`
      padding-top: 120px;
      ${media.width.lg} {
        padding-top: 80px;
      }
    `,
  },

  fontSizes: {
    extra: `
      font-size: 120px;
      ${media.width.lg} {
        font-size: 100px;
      }
    `,
    large: `
      font-size: 56px;
      ${media.width.lg} {
        font-size: 44px;
      }
    `,
    big: `
      font-size: 28px;
      ${media.width.lg} {
        font-size: 24px;
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
    `,
    medium: `
      font-size: 18px;
      ${media.width.lg} {
        font-size: 16px;
      };
      ${media.width.md} {
        font-size: 14px;
      }
    `,
    small: `
      
          `,
  },
};

export default theme;
