import { View, Text } from "react-native";
import Header from "../components/Header";

export default function Definition() {
  return (
    <>
      <Header />
      <View>
        <Text
          style={{
            fontFamily: "Inter_900Black",
            fontSize: 30,
          }}
        >
          Definition
        </Text>
      </View>
    </>
  );
}
