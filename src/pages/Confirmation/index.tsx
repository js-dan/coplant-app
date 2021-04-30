import React from 'react';
import ConfirmationComponent from '../../components/ConfirmationComponent';
import { ButtonComponent, Screen, Divider } from "../../components";

const Confirmation: React.FC = () => (
  <Screen>
    <ConfirmationComponent
      value={122.5}
    />
  </Screen>
);

export default Confirmation;
