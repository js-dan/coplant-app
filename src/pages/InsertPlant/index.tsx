import React from 'react';
import InsertImageComponent from '../../components/InsertImageComponent';
import { ButtonComponent, Screen, Divider, Back } from "../../components";
import { Alert, Modal } from 'react-native';

import {Background} from './style'

export interface InsertPlantProps {
  visibility?: boolean 
  setModalVisible?: (any: boolean) => void;
}

const InsertPlant: React.FC<InsertPlantProps> = ({visibility, setModalVisible}) => (
  <Screen>
    <Background>
      <InsertImageComponent/>
    </Background>
  </Screen>

);

export default InsertPlant;