import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator } from '@react-navigation/stack'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold } from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';
import {
  Caregiver, Home, User, Evaluation, Historic, Confirmation, Chat, EvaluationCaregiver
} from './src/pages';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function CaregiverStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Caregiver" component={Caregiver} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Evaluation" component={Evaluation} />
    </Stack.Navigator>
  );
}

const App: React.FC = () => {
  // const [fontsLoaded] = useFonts({
  //   Roboto_400Regular,
  //   Roboto_500Medium,
  //   Roboto_700Bold,
  //   Nunito_400Regular,
  //   Nunito_600SemiBold,
  //   Nunito_700Bold,
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" />
      {/*<Stack.Navigator>
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Caregiver" component={Caregiver} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
      </Stack.Navigator>*/}
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
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Cuidadores" component={CaregiverStack} />
        <Tab.Screen name="Histórico" component={Historic} />
        <Tab.Screen name="Cupons" component={CaregiverStack} />
        <Tab.Screen name="Perfil" component={User} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
