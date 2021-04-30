import React from "react";
import {View, Text,Dimensions } from "react-native";
import {PromotionComponent,HeaderComponent} from "../../components"
import { Background} from "./style";
import {Screen} from "../../components";
import Icons from '../../assets/icons/index';
import { ImageSourcePropType } from 'react-native';

const Thanks: React.FC = () => (
  <Screen>
    <Background>
      <HeaderComponent arrowLeft="true" headerText="Promoções"/>
      <View style={{marginTop: 30}}>
          <PromotionComponent headerText="Mimo para Você" bodyText="Ganhe desconto de R$ 10 "></PromotionComponent>
          <PromotionComponent headerText="Quanto mais, melhor" bodyText="Ganhe desconto de R$ 5 ao indicar um amigo "></PromotionComponent>
      </View>
    </Background>
  </Screen>
);

export default Thanks;
