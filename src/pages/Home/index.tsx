import React from 'react';
import { ButtonComponent, Screen } from '../../components';
import ConfirmationComponent from '../../components/confirmationComponent'

const Home: React.FC = () => (
  <Screen>
    <ConfirmationComponent
      value={122.5}
    />
  </Screen>
);

export default Home;
