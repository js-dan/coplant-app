import React from 'react';
import { ButtonComponent, CaregiverCardComponent, Screen } from '../../components';

const Home: React.FC = () => (
  <Screen>
    <ButtonComponent
      buttonColor="orange"
      buttonText="eitaPlantinha"
      size="small"
    />
    <CaregiverCardComponent
      skills="Corre"
      name="Pietro"
      rating="4.3"
      district="Sokovia"
    />
  </Screen>
);

export default Home;
