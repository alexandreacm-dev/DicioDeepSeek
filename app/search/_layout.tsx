import { Stack } from "expo-router";
import { useTheme } from "styled-components/native";

export default function SearchNavigation() {
  const { colors } = useTheme();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
