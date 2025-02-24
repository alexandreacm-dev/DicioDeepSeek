import { useLocalSearchParams } from "expo-router";
import HeaderVerbDetail from "../components/HeaderVerbDetail";
import MaterialTopTabs from "./components/MaterialTopTabs";

export default function Search() {
  const { selectedWord } = useLocalSearchParams();

  return (
    <>
      <HeaderVerbDetail selectedWord={selectedWord} />
      <MaterialTopTabs />
    </>
  );
}
