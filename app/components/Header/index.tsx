import * as S from "./styles";
import DicioLogo from "@/app/assets/images/dicio-logo.svg";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Header() {
  return (
    <S.HeaderContainer>
      <DicioLogo />
      <S.InputContainer>
        <S.Input placeholder="Buscar no Dicionário" />
        <S.SearchPressable>
          <Ionicons name="search" size={24} color="white" />
        </S.SearchPressable>
      </S.InputContainer>
    </S.HeaderContainer>
  );
}
