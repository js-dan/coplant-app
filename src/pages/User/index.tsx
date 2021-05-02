import React from 'react';
import {
  ScrollView, View, Text, Button,
} from 'react-native';
import { ButtonComponent, Screen, Divider } from '../../components';
import DescriptionComponent from '../../components/CaregiverDescriptionComponent';

import PresentCardComponent from '../../components/PresentCardComponent';
import PlantComponent from '../../components/PlantComponent';
import AddPlantComponent from '../../components/AddPlantComponent';
import theme from '../../assets/theme';
import { Background, SectionTitle, ButtonContainer } from './style';
import HeaderComponent from '../../components/HeaderComponent';
import axios from 'axios'
var plantname:string;
var plantqtd:number;
const User: React.FC = () => 
{
  const [name, setName] = React.useState('');
  const [qtd, setQtd] = React.useState('');
  axios.get('http://192.168.5.207:3001/plant/')
   .then(res => {
      let persons = res.data;
      const len = persons.lenght
      
      console.log(persons[(persons.length - 1)])
      plantname = persons[(persons.length - 1)].name
      plantqtd = persons[(persons.length - 1)].qtd
      setName(plantname);
      setQtd(String(plantqtd));
    })
  

return (
  <Screen>
    <Background>
      <HeaderComponent headerText="Meu Perfil" arrowLeft="true" />
      <PresentCardComponent
        userName="Liz Machado"
        stars={3}
        userLocation="Casa Amarela"
      />
      <Divider />
      <DescriptionComponent
        description="Sou apaixonada por plantas desde meus 14 anos, e por essa paixão que me especializei em botânica no meu curso de Biologia. Preciso de alguém que ame plantas, tanto quanto eu  😀"
      />
      <Divider />
      <SectionTitle>
        {' '}
        Minhas Plantas
        {' '}
      </SectionTitle>
      <View style={{ height: 150, marginTop: 0 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <PlantComponent
            name={String(name)}
            qtd={Number(qtd)}
          />
          <AddPlantComponent />
        </ScrollView>
      </View>
      {/*<ButtonComponent
        buttonColor="orange"
        buttonText="Trocar Usuario"
        size="large"
        stage="Perfil"
        changeUser={true}
      />*/}
    </Background>
  </Screen>
);
};

export default User;
