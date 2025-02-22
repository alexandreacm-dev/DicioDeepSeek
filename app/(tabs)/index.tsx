import { View, Text } from "react-native";
import { Colors } from "../constants/Colors";

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.dark.header,
        width: "100%",
        padding: 10,
        height: 200,
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <View>
        <Text style={{ textAlign: "auto" }}>HEADER</Text>
      </View>
    </View>
  );
};

export default function Definition() {
  return (
    <>
      <Header />
      <View>
        <Text>Definition</Text>
      </View>
    </>
  );
}
