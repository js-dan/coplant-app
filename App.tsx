/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';

import {
  Caregiver,
  User,
  Evaluation,
  Historic,
  Confirmation,
  Chat,
  EvaluationCaregiver,
  Promotion,
  RequestList,
  RequestConfirmationFinalizar,
  RequestConfirmation,
  CaregiverProfile,
  CaregiverListage,
} from './src/pages';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const CaregiverStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="CaregiverListage" component={CaregiverListage} />
    <Stack.Screen name="Caregiver" component={Caregiver} />
    <Stack.Screen name="Chat" component={Chat} />
    <Stack.Screen name="Evaluation" component={Evaluation} />
  </Stack.Navigator>
);

const RequestStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="RequestList" component={RequestList} />
    <Stack.Screen name="RequestConfirmation" component={RequestConfirmation} />
    <Stack.Screen name="RequestConfirmationFinalizar" component={RequestConfirmationFinalizar} />
    <Stack.Screen name="CaregiverProfile" component={CaregiverProfile} />
  </Stack.Navigator>
);

const HistoricStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Historic" component={Historic} />
  </Stack.Navigator>
);

const WalletStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="RequestList" component={RequestList} />
  </Stack.Navigator>
);

const PromotionStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Promotion" component={Promotion} />
  </Stack.Navigator>
);

const CaregiverProfileStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="CaregiverProfile" component={CaregiverProfile} />
  </Stack.Navigator>
);

const UserProfileStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="User" component={User} />
  </Stack.Navigator>
);

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
  const isUser = true;
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            color = focused ? 'tomato' : 'gray';

            if (route.name === 'Cuidadores') {
              iconName = 'md-people';
            } else if (route.name === 'Histórico') {
              iconName = 'ios-paper';
            } else if (route.name === 'Cupons') {
              iconName = 'ios-pricetags';
            } else if (route.name === 'Perfil') {
              iconName = 'md-person';
            } else if (route.name === 'Carteira') {
              iconName = 'ios-pricetags';
            } else if (route.name === 'Solicitações') {
              iconName = 'md-people';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >

        <Tab.Screen name={isUser ? 'Cuidadores' : 'Solicitações'} component={isUser ? CaregiverStack : RequestStack} />
        <Tab.Screen name={isUser ? 'Histórico' : 'Carteira'} component={isUser ? HistoricStack : WalletStack} />
        <Tab.Screen name={isUser ? 'Cupons' : 'Perfil'} component={isUser ? PromotionStack : CaregiverProfileStack} />
        {isUser ? <Tab.Screen name="Perfil" component={UserProfileStack} /> : <></> }
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
