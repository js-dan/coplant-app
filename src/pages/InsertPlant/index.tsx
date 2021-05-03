import React from 'react';
import InsertImageComponent from '../../components/InsertImageComponent';
import { ButtonComponent, Screen, Divider } from "../../components";
import { Alert, Modal } from 'react-native';


export interface InsertPlantProps {
  visibility?: boolean 
  setModalVisible: (any: boolean) => void;
}

const InsertPlant: React.FC<InsertPlantProps> = ({visibility, setModalVisible}) => (
  <Modal
  animationType="slide"
  transparent={true}
  visible={visibility}
  onRequestClose={() => {
    Alert.alert("Modal has been closed.");
  }}>
    <InsertImageComponent setModalVisible={setModalVisible}/>
  </Modal>

);

export default InsertPlant;