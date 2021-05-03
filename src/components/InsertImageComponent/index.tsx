import * as React from 'react';
import { ImageSourcePropType, Button, Picker } from 'react-native';
import ButtonPostPlantComponent from '../ButtonPostPlantComponent';
import icons from '../../assets/icons';

import {
  InsertImageContainer, InputText, InsertImageField, Image, DescriptionText, InputQtd,
} from './style';

export interface InsertImageComponentProps {
  setModalVisible: (any: boolean) => void
}

// function

const InsertImageComponent: React.ElementType<InsertImageComponentProps> = ({
  setModalVisible
}: InsertImageComponentProps) => {
  const [namePlant, setNamePlant] = React.useState('');
  const [qtdPlant, setQtdPlant] = React.useState('');
  return(
  <InsertImageContainer>
      <DescriptionText>{'Espécie: '}</DescriptionText>
      <InputText onChangeText={setNamePlant}></InputText>

      <DescriptionText>{'Quantidade: '}</DescriptionText>
      <InputText onChangeText={setQtdPlant}></InputText>

    <ButtonPostPlantComponent
      buttonColor="orange"
      buttonText="Confirmar"
      size="small"
      width="40%"
      postPlant={true}
      name={namePlant}
      qtd={Number(qtdPlant)}
      onButtonPress={() => {setModalVisible(false)}}
    />
  </InsertImageContainer>
);
};

export default InsertImageComponent;
