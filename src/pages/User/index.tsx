import React, { useContext, useReducer } from 'react';
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
import { UserContext, userInitialValue, userReducer } from '../../helpers/userReducer';
var plantname:string;
var plantqtd:number;
const User: React.FC = () => 
{
  const { user } = useContext(UserContext);
  const [name, setName] = React.useState('');
  const [qtd, setQtd] = React.useState('');
  const onPress =()=>{
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
  }
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
      <PresentCardComponent
        userName={user.name}
        stars={user.score}
        userLocation={user.address}
      />
      <Divider />
      <DescriptionComponent
        description={user.description}
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
          <PlantComponent
            name={String(name)}
            qtd={Number(qtd)}
          />
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
