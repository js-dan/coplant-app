import React from 'react';
import ConfirmationComponent from '../../components/ConfirmationComponent';
import { ButtonComponent, Screen, Divider } from '../../components';
import {Background} from './style'

const Confirmation: React.FC = () => (
  <Screen>
    <Background>
      <ConfirmationComponent
        value={122.5}
      />
    </Background>
    
  </Screen>
);

export default Confirmation;
