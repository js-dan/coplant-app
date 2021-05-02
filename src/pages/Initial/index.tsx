import React from "react";
import {View, Text,Dimensions } from "react-native";
import theme from "../../assets/theme";
import {ButtonComponent} from "../../components"
import { Background, SectionTitle,Logo} from "./style";
import {Screen} from "../../components";
import Icons from '../../assets/icons/index';
import { ImageSourcePropType } from 'react-native';

const Initial: React.FC = () => (
  <Screen>
    <Background>
      <View style={{marginTop: 120,alignItems: "center"}}>
           <Logo source={Icons.init.Logo as ImageSourcePropType}/>
          <SectionTitle>CoPlant</SectionTitle>
          <ButtonComponent buttonColor="lightGray" buttonText="Login com Google" textColor="black" icon={Icons.init.GoogleMin} size="small" width="300px"></ButtonComponent>
      </View>
    </Background>
  </Screen>
);

export default Initial;
