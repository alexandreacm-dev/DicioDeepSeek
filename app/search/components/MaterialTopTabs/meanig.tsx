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

import { DEEPSEEK_LOCAL_API_URL } from "@/app/constants";

import * as S from "./styles";

type FlatListItemProp = {
  item: Word;
};

export default function Meaning() {
  const { colors } = useTheme();
  const { word } = useAppContext();

  const [definition, setDefinition] = useState("");
  const [nextWords, setNextWords] = useState<INextWords>({} as INextWords);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchIA, setSearchIA] = useState(false);

  const selectedWord = word.toLowerCase();
  const baseUrls = [
    `https://api.dicionario-aberto.net/word/${selectedWord}`,
    `https://api.dicionario-aberto.net/near/${selectedWord}`,
    `https://api.dicionario-aberto.net/browse/${selectedWord}`,
  ];

  useEffect(() => {
    async function feetDictionaryData() {
      if (!word) return;

      setLoading(true);
      setSearchIA(false);

      try {
        const response = await Promise.all(baseUrls.map((url) => fetch(url)));
        const data = await Promise.all(
          response.map(async (response) => await response.json())
        );

        if (data) {
          let content = data[0][0] as ISearch;

          if (content) {
            let idxStart = content.xml.indexOf("<def>");
            const defContent = content.xml.slice(idxStart);
            const def = defContent
              .replace("<def>", "")
              .replace("</def>", "")
              .replace("<sense>", "")
              .replace("</sense>", "")
              .replace("<entry>", "")
              .replace("</entry>", "");
            // console.log(content);

            setDefinition(def);
          }
          setNextWords(data[2]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    feetDictionaryData();
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

  async function handleSearchDeepSeek() {
    if (!word) return;

    setLoading(true);
    setSearchIA(true);

    try {
      const response = await fetch(`${DEEPSEEK_LOCAL_API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek-r1:1.5b",
          frequency_penalty: 0,
          max_tokens: 300,
          response_format: {
            type: "json",
          },
          stream: false,
          temperature: 1,
          messages: [
            {
              role: "user",
              content: `Buscar no dicionário ${word}`,
            },
          ],
        }),
      });

      const data = await response.json();

      setDefinition(data.message.content);
    } catch (error) {
      setError("Não foi possível conectar à API do DeepSeek.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <S.Container>
        <ActivityIndicator size="large" color="#2e0f0f" />
      </S.Container>
    );
  }

  return (
    <S.Container>
      {!definition ? (
        <S.NoContentContainer>
          <NotFoundWord width={200} height={200} />
          <Text
            type="title"
            style={{
              textAlign: "center",
            }}
          >
            Não encontramos nada relacionado a essa palavra
          </Text>
          <S.PressableButton onPress={handleSearchDeepSeek}>
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
          <S.DefinitionArea value={definition} multiline />

          {!searchIA && (
            <>
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
