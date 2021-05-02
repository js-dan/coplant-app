import * as React from 'react';
import { ImageSourcePropType, Button, Picker } from 'react-native';
import ButtonPostPlantComponent from '../ButtonPostPlantComponent';
import icons from '../../assets/icons';

import {
  InsertImageContainer, InputText, InsertImageField, Image, DescriptionText, InputQtd,
} from './style';

export interface InsertImageComponentProps {
}

// function

const InsertImageComponent: React.ElementType<InsertImageComponentProps> = ({
}: InsertImageComponentProps) => {
  const [namePlant, setNamePlant] = React.useState('');
  const [qtdPlant, setQtdPlant] = React.useState('');
  return(
  <InsertImageContainer>
    <InsertImageField>
      <DescriptionText>{'Espécie: '}</DescriptionText>
      <InputText onChangeText={setNamePlant}></InputText>
    </InsertImageField>
    <InsertImageField>
      <DescriptionText>{'Quantidade: '}</DescriptionText>
      <InputQtd onValueChange={setQtdPlant} selectedValue={qtdPlant}>
        <Picker.Item label="1" value={1}></Picker.Item>
        <Picker.Item label="2" value={2}></Picker.Item>
        <Picker.Item label="3" value={3}></Picker.Item>
        <Picker.Item label="4" value={4}></Picker.Item>
        <Picker.Item label="5" value={5}></Picker.Item>
      </InputQtd>
    </InsertImageField>
    <Image source={icons.socialMedia.camera as ImageSourcePropType} />
    <ButtonPostPlantComponent
      buttonColor="orange"
      buttonText="Confirmar"
      size="small"
      width="40%"
      postPlant={true}
      name={namePlant}
      qtd={Number(qtdPlant)}
    />
  </InsertImageContainer>
);
};

export default InsertImageComponent;
