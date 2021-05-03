import React, { useState, useReducer, useContext } from "react";
import {View, Text,Dimensions, Alert } from "react-native";
import theme from "../../assets/theme";
import { Background, SectionTitle,Logo, InputTextField, ButtonContainer, ButtonText} from "./style";
import {Screen} from "../../components";
import Icons from '../../assets/icons/index';
import { ImageSourcePropType } from 'react-native';
import axios from 'axios'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { LoginContext, loginInitialValue, loginReducer } from "../../helpers/loginContext";
import { userReducer, userInitialValue, UserContext } from "../../helpers/userReducer";
import { useNavigation } from "@react-navigation/core";

const Initial: React.FC = () => {
  const [authorization, authorizationDispatch] = useReducer(loginReducer, loginInitialValue);
  const { userDispatch } = useContext(UserContext);
  const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  function login() {
    axios.post('http://192.168.5.207:3001/login', {
      email: email,
      password: password,
    })
    .then(function (response) {
      let databaseUser = response.data.user
      let token = response.data.token

      authorizationDispatch({ type: 'CAREGIVER' });
      userDispatch({ 
        type: 'save',
        name: databaseUser.name,
        email: databaseUser.email,
        address: databaseUser.address,
        id: databaseUser.id,
        isCaregiver: databaseUser.isCaregiver,
        description: databaseUser.description,
        token: token,
        score: databaseUser.note
      });

      navigation.reset({
        index: 0,
        routes: [{ name: 'TabBarScreen' }],
      });

      console.log("Loguei")
    })
    .catch(function (error) {
      Alert.alert(
        "Problema ao autenticar",
        "Usuário ou senha incorretos",
        [
          { text: "Tentar novamente", onPress: () => console.log("OK Pressed") }
        ]
      );
    })
  }  
  return (
    <Screen>
      <KeyboardAwareScrollView>
        <Background>
          <View style={{marginTop: 120,alignItems: "center"}}>
              <Logo source={Icons.init.Logo as ImageSourcePropType}/>
              <SectionTitle>CoPlant</SectionTitle>
              <InputTextField placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize={"none"}/>
              <InputTextField placeholder="Senha" secureTextEntry={true} onChangeText={setPassword} />
              <ButtonContainer>
                <ButtonText onPress={() => {login()}}> Entrar </ButtonText>
              </ButtonContainer>
          </View>
        </Background>
      </KeyboardAwareScrollView>
    </Screen>
  )
};

export default Initial;
