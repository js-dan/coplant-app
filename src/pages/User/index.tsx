import React, { useContext, useEffect, useReducer } from 'react';
import {
  ScrollView, View, Text, Button, Modal,
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
import InsertPlant from '../InsertPlant';
import { Darkforeground } from '../Caregiver/style';
var plantname:string;
var plantqtd:number;
var persons;
const User: React.FC = () => 
{
  const { user } = useContext(UserContext);
  const [name, setName] = React.useState([]);
  const [qtd, setQtd] = React.useState([]);
  const [numberPlants, setNumberPlants] = React.useState(0);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [isUpdated, setUpdated] = React.useState(false);


  const onPress =()=>{
    
      axios.get('http://192.168.5.207:3001/plant/')
      .then(res => {
         persons = res.data;
        console.log(persons)
         if (persons.length > 0) {
           setUpdated(true)
         }

         setNumberPlants(persons.length)
         setName([])
         setQtd([])
         for(let i=0;i<numberPlants;i++){
          plantname = persons[i].name
          plantqtd = persons[i].qtd
          setName(name=>[...name, plantname]);
          setQtd(qtd=>[...qtd, plantqtd]);
          console.log(plantname);
         }
         
       })

  }
  

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
        Minhas Plantas
      </SectionTitle>
      <TouchableOpacity style={{ height: 150, marginTop: 0 }} onPress={onPress}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}> 
          {[...Array(numberPlants)].map((prop, index) => 
          (
            <PlantComponent key={index} name={String(name[index])} qtd={Number(qtd[index])} />
          ))}
          <AddPlantComponent setModalVisible={setModalVisible} />
        </ScrollView>
      </TouchableOpacity>
    </Background>
  </Screen>
);
};

export default User;
