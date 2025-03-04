import GlobalStyles from "@/theme/global";
import { FC, PropsWithChildren } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "./theme";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <StyledThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </StyledThemeProvider>
);
