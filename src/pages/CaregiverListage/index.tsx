import axios from 'axios';
import React, { useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { CaregiverCardComponent, Screen } from '../../components';

const CaregiverListage: React.FC = () => {

  useEffect(() => {
    axios.get('local')
  })

  return (
    <Screen>
      <ScrollView>
      <CaregiverCardComponent
        skill1="Correr"
        skill2="Contar piada"
        skill3="Levar bala"
        name="Pietro"
        rating={3}
        district="Recife"
      />
      <CaregiverCardComponent
        skill1="Correr"
        skill2="Contar piada"
        skill3="Levar bala"
        name="Pietro"
        rating={4}
        district="Recife"
      />
      <CaregiverCardComponent
        skill1="Orquídeas"
        skill2="Rosas"
        skill3="Tulipas"
        name="João Pereira"
        rating={5}
        district="Olinda"
      />

      <CaregiverCardComponent
        skill1="Orquídeas"
        skill2="Rosas"
        skill3="Tulipas"
        name="João Pereira"
        rating={5}
        district="Olinda"
      />

      <CaregiverCardComponent
        skill1="Orquídeas"
        skill2="Rosas"
        skill3="Tulipas"
        name="João Pereira"
        rating={5}
        district="Olinda"
      />

      <CaregiverCardComponent
        skill1="Orquídeas"
        skill2="Rosas"
        skill3="Tulipas"
        name="João Pereira"
        rating={5}
        district="Olinda"
      />

      <CaregiverCardComponent
        skill1="Orquídeas"
        skill2="Rosas"
        skill3="Tulipas"
        name="João Pereira"
        rating={5}
        district="Olinda"
      />
      </ScrollView>
    </Screen>
  )
};

export default CaregiverListage;
