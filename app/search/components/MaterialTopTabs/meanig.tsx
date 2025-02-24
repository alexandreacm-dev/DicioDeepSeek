import { WebView } from "react-native-webview";
import { useEffect, useState } from "react";
import { useAppContext } from "@/app/contexts/app.context";
import * as S from "./styles";

export default function Meaning() {
  const [definition, setDefinition] = useState<ISearch>({} as ISearch);
  const [loading, setLoading] = useState(false);
  const { word } = useAppContext();

  const baseUrls = [
    `https://api.dicionario-aberto.net/word/${word}`,
    `https://api.dicionario-aberto.net/near/${word}`,
    `https://api.dicionario-aberto.net/browse/${word}`,
  ];

  console.log(word);

  useEffect(() => {
    async function loadData() {
      if (!word) return;

      setLoading(true);

      try {
        const response = await Promise.all(baseUrls.map((url) => fetch(url)));
        const data = await Promise.all(
          response.map(async (response) => await response.json())
        );

        console.log(data[0][0]);

        if (data) {
          setDefinition(data[0][0]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <S.Container>
      <WebView source={{ html: "<h1><center>Hello world</center></h1>" }} />
    </S.Container>
  );
}
