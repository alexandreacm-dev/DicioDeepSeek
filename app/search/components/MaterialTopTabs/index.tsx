import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Meaning from "./meanig";
import SynonymsAntonyms from "./synonyms-antonyms";
import Examples from "./examples";
import { useTheme } from "styled-components/native";

const Tab = createMaterialTopTabNavigator();

export default function MaterialTopTabs() {
  const { fonts, colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: fonts.Inter_500_Medium,
          fontSize: 14,
        },
        tabBarIndicatorStyle: {
          borderBottomColor: colors.tabIconDefault,
          borderBottomWidth: 2,
        },
      }}
    >
      <Tab.Screen
        name="Meaning"
        component={Meaning}
        options={{
          title: "SIGNIFICADO",
        }}
      />
      <Tab.Screen
        name="SynonymsAntonyms"
        component={SynonymsAntonyms}
        options={{
          title: "SINÕNIMOS E ANTÔNIMOS",
        }}
      />
      <Tab.Screen
        name="Examples"
        component={Examples}
        options={{
          title: "EXEMPLOS",
        }}
      />
    </Tab.Navigator>
  );
}
