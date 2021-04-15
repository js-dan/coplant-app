import React from 'react';
import { ButtonComponent, Screen, PlantComponent, AddPlantComponent } from '../../components';

const Home: React.FC = () => (
  <Screen>
   <PlantComponent
    name={"Orquidea"}
    qtd={3}
   />
   <AddPlantComponent/>
  </Screen>
);

export default Home;
