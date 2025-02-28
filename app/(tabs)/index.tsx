import { useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import Header from "@/app/components/Header";
import { Text } from "../components/Text";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import {
  randomWordsApi,
  mockDayWord,
  mostSearched,
  mockWordsWithFive,
} from "../constants/mock-api";
import { router } from "expo-router";
import { useAppContext } from "../contexts/app.context";
import * as S from "./styles";

interface Item {
  id: number;
  word: string;
}

type ItemProps = {
  item: Item;
};

export default function Definition() {
  const [randomNumber, setRandomNumber] = useState(0);
  const { setWord } = useAppContext();

  const generateRandomWord = () => {
    setRandomNumber(Math.floor(Math.random() * randomWordsApi.length));
  };

  const handleDetailVerb = () => {
    setWord(mockDayWord.word);

    router.push({
      pathname: "/search",
      params: {
        selectedWord: mockDayWord.word,
      },
    });
  };

  const renderItem = ({ item }: ItemProps) => (
    <View
      style={{
        flex: 1,
        borderWidth: 0.8,
        borderColor: "#808080",
        padding: 10,
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{item.word}</Text>
    </View>
  );

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
            {mockDayWord.word}
          </Text>

          <Text type="subtitle">{mockDayWord.type}</Text>

          <Text style={{ marginBottom: 35, marginTop: 10 }}>
            {mockDayWord.description}
          </Text>
        </S.WordDayContainer>
        <S.TouchableSeeMeans
          onPress={handleDetailVerb}
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
              fill={randomNumber * randomWordsApi.length + 20}
              tintColor="#bcbaba"
              backgroundColor="#FFF"
            >
              {(fill) => (
                <Text style={{ fontSize: 20, fontWeight: "600" }}>
                  {randomNumber}
                </Text>
              )}
            </AnimatedCircularProgress>
          </S.VocabularyContainer>
          <S.IncreaseButtonsContainer>
            <S.WordContainer>
              <Text type="title">{randomWordsApi[randomNumber]}</Text>
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
        <S.MostSearchedContainer
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
          <ScrollView
            horizontal
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <FlatList
              data={mostSearched}
              renderItem={({ item }) => renderItem({ item })}
              keyExtractor={(item) => String(item.id)}
              numColumns={2}
            />
          </ScrollView>
        </S.MostSearchedContainer>

        <S.TitleContainer>
          <Text type="primaryTitle" style={{ marginTop: 20 }}>
            Palavras com 5 letras
          </Text>
        </S.TitleContainer>
        <S.MostSearchedContainer
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
          <ScrollView
            horizontal
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <FlatList
              data={mockWordsWithFive}
              renderItem={({ item }) => renderItem({ item })}
              keyExtractor={(item) => String(item.id)}
              numColumns={2}
            />
          </ScrollView>
        </S.MostSearchedContainer>
      </S.Container>
    </>
  );
}
