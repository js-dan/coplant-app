import * as React from 'react';
import { ImageSourcePropType } from 'react-native';
import axios from 'axios'

import { AddPlantButtonContainer, AddPlantButtonText, Icon } from './style';

export interface AddPlantButtonComponentProps {

}

// Propriety width works to personalize your AddPlantButton based on the view that's wrapping it.
// If this view is in the screen size, you can use default width by only passing size props

const AddPlantButtonComponent: React.ElementType<AddPlantButtonComponentProps> = ({
}: AddPlantButtonComponentProps) => {
  const onPress = () => {
    axios.post('http://192.168.5.207:3001/plant/create', {
      name: 'Orquidea',
      imageURL: 'Flintstone',
      qtd: 3
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  return (
    <AddPlantButtonContainer onPress={onPress}>
      <AddPlantButtonText>+</AddPlantButtonText>
    </AddPlantButtonContainer>
  );
};

export default AddPlantButtonComponent;
