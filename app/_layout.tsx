import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Slot, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import "react-native-reanimated";
import { useColorScheme } from "./hooks/useColorScheme";
import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
  useFonts,
} from "@expo-google-fonts/inter";

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
  const [loaded, error] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style="auto" />
      <RootNavigation />
    </ThemeProvider>
  );
}
