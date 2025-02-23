import * as S from "./styles";
import { Text } from "../components/Text";
import { SafeAreaView } from "react-native";

export default function Settings() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.Container>
        <S.TitleContainer>
          <Text type="primaryTitle" style={{ marginTop: 10 }}>
            Melhore o seu vocabulário
          </Text>
        </S.TitleContainer>
        <S.WordDayContainer>
          <Text type="title" style={{ color: "#063859" }}>
            alvíssaras
          </Text>

          <Text type="subtitle">Substantivo feminino plural</Text>

          <Text style={{ marginBottom: 35 }}>
            Prêmio que se dá a quem traz boas novidades ou entrega coisa perdida
            ao dono
          </Text>
        </S.WordDayContainer>

        <S.TitleContainer>
          <Text type="primaryTitle" style={{ marginTop: 10 }}>
            Mais Pesquisadas
          </Text>
        </S.TitleContainer>
        <S.WordDayContainer>
          <Text type="title" style={{ color: "#063859" }}>
            alvíssaras
          </Text>

          <Text type="subtitle">Substantivo feminino plural</Text>

          <Text style={{ marginBottom: 35 }}>
            Prêmio que se dá a quem traz boas novidades ou entrega coisa perdida
            ao dono
          </Text>
        </S.WordDayContainer>

        <S.TitleContainer>
          <Text type="primaryTitle" style={{ marginTop: 10 }}>
            Favoritas
          </Text>
        </S.TitleContainer>
        <S.WordDayContainer>
          <Text type="title" style={{ color: "#063859" }}>
            alvíssaras
          </Text>

          <Text>Substantivo feminino plural</Text>
        </S.WordDayContainer>
        <S.TouchableSeeMeans>
          <Text type="link">VER SIGNIFICADO</Text>
        </S.TouchableSeeMeans>
      </S.Container>
    </SafeAreaView>
  );
}
