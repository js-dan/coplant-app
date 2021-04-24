import React from 'react';
import { CaregiverCardComponent, Screen } from '../../components';

const CaregiverListage: React.FC = () => (
  <Screen>
    <CaregiverCardComponent
      skill1="Correr"
      skill2="Contar piada"
      skill3="Levar bala"
      name="Pietro"
      rating="4.3"
      district="Sokovia"
    />
    <CaregiverCardComponent
      skill1="Correr"
      skill2="Contar piada"
      skill3="Levar bala"
      name="Pietro"
      rating="4.3"
      district="Sokovia"
    />
    <CaregiverCardComponent
      skill1="Correr"
      skill2="Contar piada"
      skill3="Levar bala"
      name="Pietro"
      rating="4.3"
      district="Sokovia"
    />
  </Screen>
);

export default CaregiverListage;
