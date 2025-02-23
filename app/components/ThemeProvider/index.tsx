import React from "react";
import { ThemeProvider as DefaultThemeProvider } from "styled-components/native";
import theme from "@/app/styles";

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  return (
    <DefaultThemeProvider theme={theme.dark}>{children}</DefaultThemeProvider>
  );
}
