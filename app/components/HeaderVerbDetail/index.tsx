import React, { useState } from "react";
import DicioLogo from "@/app/assets/images/dicio-logo.svg";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { useRouter } from "expo-router";
import * as S from "./styles";

type Props = {
  selectedWord: string | string[];
};

const HeaderVerbDetail: React.FC<Props> = ({ selectedWord }) => {
  const { back } = useRouter();
  const [search, setSearch] = useState(selectedWord);

  return (
    <S.HeaderContainer>
      <DicioLogo />
      <S.InputContainer>
        <S.SearchPressable onPress={() => back()}>
          <SimpleLineIcons name="arrow-left" size={24} color="black" />
        </S.SearchPressable>
        <S.Input
          placeholder="Buscar no Dicionário"
          value={search}
          onChangeText={setSearch}
        />
      </S.InputContainer>
    </S.HeaderContainer>
  );
};

export default HeaderVerbDetail;
