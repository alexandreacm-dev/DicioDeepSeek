import React, { useEffect, useState } from "react";
import { router, useRouter } from "expo-router";
import DicioLogo from "@/app/assets/images/dicio-logo.svg";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as S from "./styles";
import { useAppContext } from "@/app/contexts/app.context";

// type Props = {
//   selectedWord: string | string[];
// };

const HeaderVerbDetail: React.FC = () => {
  const { word, setWord } = useAppContext();
  const { back } = useRouter();
  const [search, setSearch] = useState(word);

  const handleVerbDetail = () => {
    if (!search) return;

    setWord(search);

    router.replace({
      pathname: "/search",
      params: {
        selectedWord: word,
      },
    });
  };

  return (
    <S.HeaderContainer>
      <DicioLogo />
      <S.InputContainer>
        <S.GoBackPressable onPress={() => back()}>
          <SimpleLineIcons name="arrow-left" size={24} color="black" />
        </S.GoBackPressable>
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
};

export default HeaderVerbDetail;
