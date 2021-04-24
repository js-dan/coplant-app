import React from 'react';
import {
  ButtonComponent, CaregiverCardComponent, Screen, Divider,
} from '../../components';
import TagComponent from '../../components/TagComponent';
import HeaderComponent from '../../components/HeaderComponent';
import DescriptionComponent from '../../components/CaregiverDescriptionComponent';

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
    <CaregiverCardComponent
      skill1="Correr"
      skill2="Faz piada"
      skill3="Leva bala"
      name="Pietro"
      rating="4.3"
      district="Sokovia"
    />
    <TagComponent text="Cuidadoso" />
    <HeaderComponent headerText="Perfil Cuidador" arrowLeft="true" shareIcon="true" />
  </Screen>
);

export default Home;
