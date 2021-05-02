import * as React from 'react';
import { ImageSourcePropType } from 'react-native';
import axios from 'axios'

import { AddPlantButtonContainer, AddPlantButtonText, Icon } from './style';
import { useNavigation } from '@react-navigation/native';

export interface AddPlantButtonComponentProps {

}

// Propriety width works to personalize your AddPlantButton based on the view that's wrapping it.
// If this view is in the screen size, you can use default width by only passing size props

const AddPlantButtonComponent: React.ElementType<AddPlantButtonComponentProps> = ({
}: AddPlantButtonComponentProps) => {
  const navigation = useNavigation()
  const onPress = () => {
    navigation.navigate("InsertPlant")
  };
  return (
    <AddPlantButtonContainer onPress={onPress}>
      <AddPlantButtonText>+</AddPlantButtonText>
    </AddPlantButtonContainer>
  );
};

export default AddPlantButtonComponent;
