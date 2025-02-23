import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
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
                backgroundColor: "#7ae2ff",
              }}
            />
          );
        },
        tabBarActiveTintColor: "#0a7ea4",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "",
          title: "Dicionário",
          tabBarIcon: ({ color }) => (
            <Entypo name="book" size={35} color={color} />
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
      <Tabs.Screen
        name="settings"
        options={{
          // headerLeft: () => {
          //   return (
          //     <View>
          //       <MaterialIcons name="arrow-back-ios" size={20} color="black" />
          //     </View>
          //   );
          // },
          headerTitle: "",

          title: "Definição",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={35} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
