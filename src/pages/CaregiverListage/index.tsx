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
        skill1="Cacto"
        skill2="Girassol"
        skill3="Orquidea"
        name="Pietra Almeida"
        rating={3}
        district="Recife"
        userImage="liz"
      />
      <CaregiverCardComponent
        skill1="Babosa"
        skill2="Samambaia"
        skill3="Rosa"
        name="Edson Castro"
        rating={4}
        district="Recife"
        userImage="caio"
      />
      <CaregiverCardComponent
        skill1="Orquídeas"
        skill2="Rosas"
        skill3="Tulipas"
        name="Iberê Tenório"
        rating={5}
        district="Olinda"
        userImage="ligia"
      />

      <CaregiverCardComponent
        skill1="Orquídeas"
        skill2="Rosas"
        skill3="Tulipas"
        name="Roberta Alves"
        rating={4}
        district="Recife"
        userImage="claudia"
      />

      <CaregiverCardComponent
        skill1="Orquídeas"
        skill2="Rosas"
        skill3="Tulipas"
        name="Mario Peixoto"
        rating={3}
        district="Olinda"
        userImage="c"
      />

      <CaregiverCardComponent
        skill1="Orquídeas"
        skill2="Rosas"
        skill3="Tulipas"
        name="Leticia Albuquerque"
        rating={3}
        district="Olinda"
        userImage="b"
      />

      <CaregiverCardComponent
        skill1="Orquídeas"
        skill2="Rosas"
        skill3="Girassol"
        name="Joana Pereira"
        rating={4}
        district="Recife"
        userImage="a"
      />
      </ScrollView>
    </Screen>
  )
};

export default CaregiverListage;
