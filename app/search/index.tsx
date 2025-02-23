import { useLocalSearchParams } from "expo-router";
import { Text } from "../components/Text";
import HeaderVerbDetail from "../components/HeaderVerbDetail";
import * as S from "./styles";

export default function Search() {
  const { selectedWord } = useLocalSearchParams();

  return (
    <>
      <HeaderVerbDetail selectedWord={selectedWord} />
      <S.Container>
        <S.TitleContainer>
          <Text type="primaryTitle">Palavra do Dia</Text>
          <Text type="date">21 de Fevereiro</Text>
        </S.TitleContainer>
      </S.Container>
    </>
  );
}
