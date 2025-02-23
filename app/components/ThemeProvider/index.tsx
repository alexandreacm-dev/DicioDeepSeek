import React from "react";
import { ThemeProvider as DefaultThemeProvider } from "styled-components/native";
import lightTheme from "@/app/styles/light";

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  return (
    <DefaultThemeProvider theme={lightTheme}>{children}</DefaultThemeProvider>
  );
}
