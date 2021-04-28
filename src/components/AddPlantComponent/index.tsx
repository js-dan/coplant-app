import * as React from 'react';
import { ImageSourcePropType } from 'react-native';
import {
  AddPlantContainer,
  AddPlantText,
} from './style';
import AddPlantButtonComponent from '../AddPlantButtonComponent';
import theme from '../../assets/theme';
import icons from '../../assets/icons';

export interface AddPlantComponentProps {

}

const AddPlantComponent: React.ElementType<AddPlantComponentProps> = ({

}: AddPlantComponentProps) => (
  <AddPlantContainer>
    <AddPlantButtonComponent />
    <AddPlantText>Adicionar Planta</AddPlantText>
  </AddPlantContainer>
);

export default AddPlantComponent;
