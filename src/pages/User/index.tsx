import React from "react";
import { ScrollView, View, Text } from "react-native";
import { ButtonComponent, Screen, Divider } from "../../components";
import DescriptionComponent from "../../components/CaregiverDescriptionComponent";

import PresentCardComponent from "../../components/PresentCardComponent";
import PlantComponent from "../../components/PlantComponent"
import AddPlantComponent from "../../components/AddPlantComponent"
import theme from "../../assets/theme";
import { Background, SectionTitle, ButtonContainer } from "./style";
import HeaderComponent from "../../components/HeaderComponent";

const User: React.FC = () => (
  <Screen>
    <Background>
      <HeaderComponent headerText="Meu Perfil" arrowLeft="true" />
      <PresentCardComponent
       userName={"Liz Machado"}
       stars={3}
       userLocation={"Casa Amarela"}
      />
      <Divider/>
      <DescriptionComponent
        description="Sou apaixonada por plantas desde meus 14 anos, e por essa paixão que me especializei em botânica no meu curso de Biologia. Preciso de alguém que ame plantas, tanto quanto eu  😀"
      />
      <Divider />
      <SectionTitle> {"Minhas Plantas"} </SectionTitle>
      <View style={{ height: 150, marginTop: 0}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <PlantComponent
            name={"Orquidea"}
            qtd={3}
          /> 
          <AddPlantComponent/>
        </ScrollView>
      </View>
    </Background>
  </Screen>
);

export default User;
