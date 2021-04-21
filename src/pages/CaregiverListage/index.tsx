import React from 'react';
import { CaregiverCardComponent, Screen } from '../../components';

const CaregiverListage: React.FC = () => (
  <Screen>
    <CaregiverCardComponent
      skills="Corre"
      name="Pietro"
      rating="4.3"
      district="Sokovia"
    />
    <CaregiverCardComponent
      skills="Corre"
      name="Pietro"
      rating="4.3"
      district="Sokovia"
    />
    <CaregiverCardComponent
      skills="Corre"
      name="Pietro"
      rating="4.3"
      district="Sokovia"
    />
  </Screen>
);

export default CaregiverListage;
