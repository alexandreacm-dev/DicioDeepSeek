import { useState } from "react";
import Header from "@/app/components/Header";
import * as S from "./styles";
import { Text } from "../components/Text";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const randomWords = [
  "autêntico",
  "obsoleto",
  "supracitado",
  "dissipar",
  "melindrosa",
  "resoluto",
];

export default function Definition() {
  const [randomNumber, setRandomNumber] = useState(0);

  const generateRandomWord = () => {
    setRandomNumber(Math.floor(Math.random() * randomWords.length));
  };

  return (
    <>
      <Header />
      <S.Container>
        <S.TitleContainer>
          <Text type="primaryTitle">Palavra do Dia</Text>
          <Text type="date">21 de Fevereiro</Text>
        </S.TitleContainer>
        <S.WordDayContainer
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <Text type="title" style={{ color: "#063859" }}>
            alvíssaras
          </Text>

          <Text type="subtitle">Substantivo feminino plural</Text>

          <Text style={{ marginBottom: 35, marginTop: 10 }}>
            Prêmio que se dá a quem traz boas novidades ou entrega coisa perdida
            ao dono
          </Text>
        </S.WordDayContainer>
        <S.TouchableSeeMeans
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <Text type="link">VER SIGNIFICADO</Text>
        </S.TouchableSeeMeans>

        <S.TitleContainer>
          <Text type="primaryTitle" style={{ marginTop: 20, marginBottom: 10 }}>
            Melhore o seu vocabulário
          </Text>
        </S.TitleContainer>
        <S.IncreaseWordsContainer
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <S.VocabularyContainer>
            <AnimatedCircularProgress
              size={55}
              width={6}
              fill={randomNumber * randomWords.length + 20}
              tintColor="#bcbaba"
              onAnimationComplete={() => console.log("onAnimationComplete")}
              backgroundColor="#FFF"
            >
              {(fill) => (
                <Text style={{ fontSize: 20, fontWeight: "600" }}>
                  {randomNumber}
                </Text>
              )}
            </AnimatedCircularProgress>
            {/* <S.StatusWordContainer>
              <Text style={{ fontSize: 20, fontWeight: "600" }}>
                {randomNumber}
              </Text>
            </S.StatusWordContainer> */}
          </S.VocabularyContainer>
          <S.IncreaseButtonsContainer>
            <S.WordContainer>
              <Text type="title">{randomWords[randomNumber]}</Text>
            </S.WordContainer>
            <S.ButtonContainer>
              <S.PressableButton onPress={generateRandomWord}>
                <Text
                  style={{
                    color: "#FFF",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 12,
                  }}
                >
                  SORTEAR PALAVRA
                </Text>
              </S.PressableButton>
              <S.PressableButton>
                <Text
                  style={{
                    color: "#FFF",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 12,
                  }}
                >
                  VER SIGNIFICADO
                </Text>
              </S.PressableButton>
            </S.ButtonContainer>
          </S.IncreaseButtonsContainer>
        </S.IncreaseWordsContainer>

        <S.TitleContainer>
          <Text type="primaryTitle" style={{ marginTop: 20 }}>
            Mais Pesquisadas
          </Text>
        </S.TitleContainer>
        <S.MoreWordsContainer
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <Text type="title" style={{ color: "#063859" }}>
            alvíssaras
          </Text>

          <Text type="subtitle">Substantivo feminino plural</Text>
        </S.MoreWordsContainer>
      </S.Container>
    </>
  );
}
