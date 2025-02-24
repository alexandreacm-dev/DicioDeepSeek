import { useEffect, useState } from "react";
import { WebView } from "react-native-webview";
import { useAppContext } from "@/app/contexts/app.context";
import { useTheme } from "styled-components/native";
import { ActivityIndicator, FlatList } from "react-native";
import { INextWords, ISearch, Word } from "@/app/models";

import { Text } from "@/app/components/Text";
import NotFoundWord from "@/app/assets/images/noWord.svg";
import DeepSeek from "@/app/assets/images/deepseek.svg";
import Feather from "@expo/vector-icons/Feather";

import * as S from "./styles";

type FlatListItemProp = {
  item: Word;
};

export default function Meaning() {
  const { colors } = useTheme();

  const { word } = useAppContext();

  const [definition, setDefinition] = useState<ISearch>({} as ISearch);
  const [nextWords, setNextWords] = useState<INextWords>({} as INextWords);
  const [loading, setLoading] = useState(false);

  const selectedWord = word.toLowerCase();
  const baseUrls = [
    `https://api.dicionario-aberto.net/word/${selectedWord}`,
    `https://api.dicionario-aberto.net/near/${selectedWord}`,
    `https://api.dicionario-aberto.net/browse/${selectedWord}`,
  ];

  useEffect(() => {
    async function loadData() {
      if (!word) return;

      setLoading(true);

      try {
        const response = await Promise.all(baseUrls.map((url) => fetch(url)));
        const data = await Promise.all(
          response.map(async (response) => await response.json())
        );

        if (data) {
          setDefinition(data[0][0]);
          setNextWords(data[2]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const renderItem = ({ item }: FlatListItemProp) => (
    <S.NextWordsContainer
      key={item.id}
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
      <Text type="defaultSemiBold">{item.word}</Text>
    </S.NextWordsContainer>
  );

  return (
    <S.Container>
      {!definition ? (
        <S.NoContentContainer>
          <NotFoundWord width={200} height={200} />
          <Text
            type="primaryTitle"
            style={{
              textAlign: "center",
            }}
          >
            Não encontramos nada relacionado a essa palavra
          </Text>
          <S.PressableButton>
            <S.IconContainer>
              <Feather name="search" size={30} color={colors.buttonColor} />
            </S.IconContainer>
            <S.ButtonContainer>
              <Text
                type="defaultSemiBold"
                style={{
                  textAlign: "center",
                  marginLeft: 20,
                }}
              >
                Busca na DeepSeek IA
              </Text>
              <DeepSeek width={50} height={50} />
            </S.ButtonContainer>
          </S.PressableButton>
        </S.NoContentContainer>
      ) : (
        <>
          {loading ? (
            <ActivityIndicator size="large" color="#CDCDCD" />
          ) : (
            <>
              <S.WebViewContainer
                style={{
                  width: "100%",
                  height: "20%",
                }}
              >
                <WebView source={{ html: definition?.xml || "" }} />
              </S.WebViewContainer>

              <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                  <Text
                    type="title"
                    style={{
                      marginTop: 10,
                      marginBottom: 10,
                      backgroundColor: "#FFF",
                    }}
                  >
                    Próximas Palavras
                  </Text>
                )}
                style={{
                  flex: 1,
                  padding: 10,
                  backgroundColor: "#FFFFFF",
                }}
                data={nextWords.words}
                keyExtractor={(item) => String(item.id)}
                renderItem={renderItem}
              />
            </>
          )}
        </>
      )}
    </S.Container>
  );
}
