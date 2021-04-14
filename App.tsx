import React from "react";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

import AppLoading from "expo-app-loading";
import { StatusBar } from "react-native";

import { Caregiver } from "./src/pages";

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar backgroundColor="white" />
      <Caregiver />
    </>
  );
};
export default App;
