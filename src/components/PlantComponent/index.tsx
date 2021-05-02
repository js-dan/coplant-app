import * as React from 'react';
import { ImageSourcePropType } from 'react-native';
import {
  PlantContainer,
  PlantText,
  PlantImage,
} from './style';

import theme from '../../assets/theme';
import icons from '../../assets/icons';
import axios from 'axios'

import orquideaPic from '../../assets/img/plants/Orquidea.png';


export interface PlantComponentProps {
  qtd?: number;
  name?: string;
}

const PlantComponent: React.ElementType<PlantComponentProps> = ({
  qtd,name
}: PlantComponentProps) => 
{
return (
  <PlantContainer>
    {(<PlantImage source={orquideaPic as ImageSourcePropType} />)}
    <PlantText>{`${qtd}x ${String(name)}`}</PlantText>
  </PlantContainer>
);
};

export default PlantComponent;
