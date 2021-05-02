import React from "react";
import {View, Text,Dimensions } from "react-native";
import theme from "../../assets/theme";
import {HeaderComponent} from "../../components"
import { Background, SectionTitle,ImgLike} from "./style";
import {Screen} from "../../components";
import Icons from '../../assets/icons/index';
import { ImageSourcePropType } from 'react-native';

const Thanks: React.FC = () => (
  <Screen>
    <Background>
      <View style={{marginTop: 100,alignItems: "center"}}>
          <View style={{padding: 25,borderStyle: "solid",borderColor:"#435D74",borderWidth: 2,borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2}}>
            <ImgLike source={Icons.thanks.Like as ImageSourcePropType}/>
          </View>
          <SectionTitle>Obrigado por solicitar um de nossos cuidadores, por favor aguarde a aprovação de sua solicitação!</SectionTitle>
      </View>
    </Background>
  </Screen>
);

export default Thanks;
