import React, {useReducer} from 'react';
import { NavigationContainer} from '@react-navigation/native';
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
  Caregiver, Home, Initial, User, Evaluation, Historic, Confirmation, Chat, EvaluationCaregiver, CaregiverListage,
  Promotion, RequestList, RequestConfirmationFinalizar, RequestConfirmation, CaregiverProfile, InsertPlant
} from './src/pages';
import { UserContext, userInitialValue, userReducer } from './src/helpers/userReducer';
import { LoginContext, loginInitialValue, loginReducer } from './src/helpers/loginContext';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function CaregiverStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Caregiver" component={Caregiver} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
      <Stack.Screen name="CaregiverListage" component={CaregiverListage} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Evaluation" component={Evaluation} />
    </Stack.Navigator>
  );
}

function RequestStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="RequestList" component={RequestList} />
      <Stack.Screen name="RequestConfirmation" component={RequestConfirmation} />
      <Stack.Screen name="RequestConfirmationFinalizar" component={RequestConfirmationFinalizar} />
    </Stack.Navigator>
  );
}

function UserStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="InsertPlant" component={InsertPlant} />
    </Stack.Navigator>
  );
}


const App: React.FC = () => {
  const [authorization, authorizationDispatch] = useReducer(loginReducer, loginInitialValue);
  const [user, userDispatch] = useReducer(userReducer, userInitialValue);
  const isUser = true
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />
  
  return (
    <NavigationContainer>
      <UserContext.Provider value={{ user, userDispatch }}>
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
        <Tab.Screen name="Histórico" component={Initial} />
        <Tab.Screen name="Cupons" component={Promotion} />
        <Tab.Screen name="Perfil" component={isUser?UserStack:CaregiverProfile} />
      </Tab.Navigator>
    </UserContext.Provider>
    </NavigationContainer>
  );
};
export default App;
