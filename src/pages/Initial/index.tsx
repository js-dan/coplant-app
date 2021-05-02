import React, { useState } from "react";
import {View, Text,Dimensions } from "react-native";
import theme from "../../assets/theme";
import { Background, SectionTitle,Logo, InputTextField, ButtonContainer, ButtonText} from "./style";
import {Screen} from "../../components";
import Icons from '../../assets/icons/index';
import { ImageSourcePropType } from 'react-native';
import axios from 'axios'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Initial: React.FC = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  function login() {
    axios.post('http://192.168.0.3:3001/login', {
      email: email,
      password: password,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }  
  return (
    <Screen>
      <KeyboardAwareScrollView>
        <Background>
          <View style={{marginTop: 120,alignItems: "center"}}>
              <Logo source={Icons.init.Logo as ImageSourcePropType}/>
              <SectionTitle>CoPlant</SectionTitle>
              <InputTextField placeholder="Email" value={email} onChangeText={setEmail} />
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
