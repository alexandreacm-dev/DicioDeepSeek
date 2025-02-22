import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from "@react-navigation/native";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import "react-native-reanimated";
import { useColorScheme } from "./hooks/useColorScheme";
import useGoogleFonts from "./hooks/useGoogleFonts";
import ThemeProvider from "./components/ThemeProvider";

SplashScreen.preventAutoHideAsync();

function RootNavigation() {
  return (
    <Slot />
    // <Stack>
    //   <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    //   <Stack.Screen name="+not-found" />
    // </Stack>
  );
}

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  const [loaded, error] = useGoogleFonts();

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    // <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
    <ThemeProvider>
      <StatusBar style="auto" />
      <RootNavigation />
    </ThemeProvider>
  );
}
