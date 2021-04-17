import React from 'react';
import { ButtonComponent, Screen, PlantComponent, AddPlantComponent, PresentCardComponent} from '../../components';

const Home: React.FC = () => (
  <Screen>
   <PresentCardComponent
    userName={"Liz Machado"}
    stars={3}
    userLocation={"Casa Amarela"}
   />
   <AddPlantComponent/>
   <PlantComponent
    name={"Orquidea"}
    qtd={3}
  />
  </Screen>
);

export default Home;
