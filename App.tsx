import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold} from '@expo-google-fonts/roboto';
import {Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold } from '@expo-google-fonts/nunito';
import AppLoading from "expo-app-loading";
import { StatusBar } from "react-native";
import { Caregiver, Home, User, Evaluation  } from "./src/pages";
        
const Tab = createBottomTabNavigator();

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
    <NavigationContainer>
      <StatusBar backgroundColor="white" />
      <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  color = focused ? 'tomato' : 'gray'

                  if (route.name === 'Cuidadores') {
                    iconName = 'md-people'
                  } else if (route.name === 'Histórico') {
                    iconName = 'ios-paper'
                  } else if (route.name === 'Cupons') {
                    iconName = 'ios-pricetags';
                  } else if (route.name === 'Perfil') {
                    iconName = 'md-person';
                  }
                  
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
              }}
          >
        <Tab.Screen name="Cuidadores" component={Caregiver} />
        <Tab.Screen name="Histórico" component={Caregiver} />
        <Tab.Screen name="Cupons" component={Caregiver} />
        <Tab.Screen name="Perfil" component={Caregiver} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
