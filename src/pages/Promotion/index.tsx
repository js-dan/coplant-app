import React from "react";
import {View, Text,Dimensions ,ScrollView} from "react-native";
import {PromotionComponent,HeaderComponent} from "../../components"
import { Background} from "./style";
import {Screen} from "../../components";
import Icons from '../../assets/icons/index';
import { ImageSourcePropType } from 'react-native';

const Thanks: React.FC = () => (
  <Screen>
    <Background>
      <View style={{marginTop: 30}}>
          <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
            <PromotionComponent headerText="Mimo para Você" bodyText="Ganhe desconto de R$ 10 "></PromotionComponent>
            <PromotionComponent headerText="Quanto mais, melhor" bodyText="Ganhe desconto de R$ 5 ao indicar um amigo "></PromotionComponent>
          </ScrollView>
      </View>
    </Background>
  </Screen>
);

export default Thanks;
