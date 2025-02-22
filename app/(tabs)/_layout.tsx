import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Colors } from "../constants/Colors";
import { View, Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.dark.header,
          borderWidth: 0,
          borderColor: Colors.dark.header,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: "",
        },
        tabBarIconStyle: {
          width: 45,
          height: 45,
        },
        tabBarStyle: {
          height: 100,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          backgroundColor: "#fafafa",
          borderWidth: 1,
          borderColor: "#808080",
        },
        headerBackground: () => {
          return (
            <View
              style={{
                flex: 1,
                backgroundColor: Colors.dark.header,
              }}
            />
          );
        },
        tabBarActiveTintColor: "#0c9fd5",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "",
          title: "Definição",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={35} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="classification"
        options={{
          headerTitle: "",
          title: "Classificação",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="edit-square" size={35} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="suggestion"
        options={{
          headerTitle: "",
          title: "Sugestões",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="email" size={35} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
