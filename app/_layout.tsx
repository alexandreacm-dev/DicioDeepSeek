import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import "react-native-reanimated";
import { useColorScheme } from "./hooks/useColorScheme";

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
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style="auto" />
      <RootNavigation />
    </ThemeProvider>
  );
}
