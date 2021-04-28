import * as React from 'react';
import { ImageSourcePropType, Button, Picker } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { ButtonComponent } from '../ButtonComponent';
import icons from '../../assets/icons';

import {
  InsertImageContainer, InputText, InsertImageField, Image, DescriptionText, InputQtd,
} from './style';

export interface InsertImageComponentProps {
}

// function

const InsertImageComponent: React.ElementType<InsertImageComponentProps> = ({
}: InsertImageComponentProps) => (
  <InsertImageContainer>
    <InsertImageField>
      <DescriptionText>{'Espécie: '}</DescriptionText>
      <InputText />
    </InsertImageField>
    <InsertImageField>
      <DescriptionText>{'Quantidade: '}</DescriptionText>
      <InputQtd>
        <Picker.Item label="1" value={1} />
        <Picker.Item label="2" value={2} />
        <Picker.Item label="3" value={3} />
        <Picker.Item label="4" value={4} />
        <Picker.Item label="5" value={5} />
      </InputQtd>
    </InsertImageField>
    <Image source={icons.socialMedia.camera} />
    <ButtonComponent
      buttonColor="orange"
      buttonText="Confirmar"
      size="small"
      width="40%"
    />
  </InsertImageContainer>
);

export default InsertImageComponent;
