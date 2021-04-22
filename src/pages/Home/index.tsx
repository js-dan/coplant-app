import React from 'react';
import TagComponent from '../../components/TagComponent';
import HeaderComponent from '../../components/HeaderComponent';
import { ButtonComponent, Screen, Divider } from "../../components";
import DescriptionComponent from "../../components/CaregiverDescriptionComponent";

const Home: React.FC = () => (
  <Screen>
    <DescriptionComponent
      description="Eu sou Caio e adoro cuidar de plantas. Faço isso há 10 anos e adoraria
      poder te ajudar a ter uma casa bem verde."
    />
    <Divider />
    <ButtonComponent
      buttonColor="orange"
      buttonText="Contratar"
      size="big"
      textColor="white"
    />
    <TagComponent text="Cuidadoso"></TagComponent>
    <HeaderComponent headerText="Perfil Cuidador" arrowLeft="true" shareIcon="true"></HeaderComponent>
  </Screen>
);

export default Home;
