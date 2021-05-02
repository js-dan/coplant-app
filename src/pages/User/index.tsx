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
import { TouchableOpacity } from 'react-native-gesture-handler';
var plantname:string;
var plantqtd:number;
var persons;
const User: React.FC = () => 
{
  const [name, setName] = React.useState([]);
  const [qtd, setQtd] = React.useState([]);
  const [numberPlants, setNumberPlants] = React.useState(0);
  const onPress =()=>{
    
    axios.get('http://192.168.5.207:3001/plant/')
        .then(res => {
           persons = res.data;
           setNumberPlants(persons.length)
           setName([])
           setQtd([])
           for(let i=0;i<numberPlants;i++){
            plantname = persons[i].name
            plantqtd = persons[i].qtd
            setName(name=>[...name, plantname]);;
            setQtd(qtd=>[...qtd, plantqtd]);
            console.log(name);
           }
           
         })
  }
  

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
      <TouchableOpacity style={{ height: 150, marginTop: 0 }} onPress={
        onPress
      }>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}> 
          {[...Array(numberPlants)].map((prop, index) => 
          (
            <PlantComponent key={index} name={String(name[index])} qtd={Number(qtd[index])} />
          ))}
          <AddPlantComponent />
        </ScrollView>
      </TouchableOpacity>
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
