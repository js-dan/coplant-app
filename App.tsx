import React from 'react';
import {
  useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold } from '@expo-google-fonts/nunito';


import AppLoading from "expo-app-loading";
import { StatusBar } from "react-native";

import { Caregiver, Home, User } from "./src/pages";

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
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
