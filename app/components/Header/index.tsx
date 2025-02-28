import DicioLogo from "@/app/assets/images/dicio-logo.svg";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useAppContext } from "@/app/contexts/app.context";
import * as S from "./styles";
import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");
  const { setWord } = useAppContext();
  const { push } = useRouter();

  const handleVerbDetail = () => {
    if (!search) return;

    setWord(search);

    push({
      pathname: "/search",
      params: {
        selectedWord: search,
      },
    });
  };

  return (
    <S.HeaderContainer>
      <DicioLogo />
      <S.InputContainer>
        <S.Input
          placeholder="Buscar no Dicionário"
          value={search}
          onChangeText={setSearch}
        />
        <S.SearchPressable onPress={handleVerbDetail}>
          <Ionicons name="search" size={24} color="white" />
        </S.SearchPressable>
      </S.InputContainer>
    </S.HeaderContainer>
  );
}
