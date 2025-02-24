import { createContext, useContext, useState } from "react";
import { View } from "react-native";

type PropsProvider = {
  children: React.ReactNode;
};

type InitialContext = {
  word: string;
  setWord: React.Dispatch<React.SetStateAction<string>>;
};

const appContext = createContext<InitialContext>({} as InitialContext);
export const useAppContext = () => useContext(appContext);

function AppContextProvider({ children }: PropsProvider) {
  const [word, setWord] = useState("");
  return (
    <appContext.Provider value={{ word, setWord }}>
      {children}
    </appContext.Provider>
  );
}

export default AppContextProvider;
