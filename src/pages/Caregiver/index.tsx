import React from "react";
import { ScrollView } from "react-native";
import { ButtonComponent, Screen, Divider } from "../../components";
import DescriptionComponent from "../../components/CaregiverDescriptionComponent";

const Caregiver: React.FC = () => (
  <Screen>
    <DescriptionComponent
      description="Eu sou Caio e adoro cuidar de plantas. Faço isso há 10 anos e adoraria
      poder te ajudar a ter uma casa bem verde."
    />
    <Divider />
    <ButtonComponent
      buttonColor="orange"
      buttonText="Contratar"
      size="large"
      textColor="white"
    />
    <ScrollView>
      
    </ScrollView>
  </Screen>
);

export default Caregiver;
