import React from "react";
import { ThemeProvider as DefaultThemeProvider } from "styled-components/native";
import DefaultTheme from "@/app/styles/theme/DefaultTheme";

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  return (
    <DefaultThemeProvider theme={DefaultTheme}>{children}</DefaultThemeProvider>
  );
}
