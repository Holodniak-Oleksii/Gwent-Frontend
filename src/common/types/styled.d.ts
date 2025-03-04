import { css } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      text: string;
      border: string;
      gold: string;
    };
    overflow: string;
    getLineClamp: (lines: number) => string;
    media: {
      width: {
        xlg: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
        xxs: string;
      };
    };
    spacing: {
      content: ReturnType<typeof css>;
    };
    fontSizes: {
      extra: string;
      large: string;
      regular: string;
      medium: string;
      big: string;
      small: string;
    };
  }
}
