import { View, Text } from "react-native";
import * as Style from "./styles";

export default function Header() {
  return (
    <Style.HeaderContainer>
      <Text style={{ textAlign: "auto", fontFamily: "Inter_700Bold" }}>
        HEADER
      </Text>
    </Style.HeaderContainer>
  );
}
