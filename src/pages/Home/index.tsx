import React from 'react';
import { ButtonComponent, Screen, PlantComponent } from '../../components';

const Home: React.FC = () => (
  <Screen>
   <PlantComponent
    name={"Orquidea"}
    qtd={3}
   />
  </Screen>
);

export default Home;
