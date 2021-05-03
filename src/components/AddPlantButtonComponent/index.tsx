import * as React from 'react';
import { ImageSourcePropType } from 'react-native';
import axios from 'axios'

import { AddPlantButtonContainer, AddPlantButtonText, Icon } from './style';
import { useNavigation } from '@react-navigation/native';

export interface AddPlantButtonComponentProps {
  setModalVisible: (any: boolean) => void
}

// Propriety width works to personalize your AddPlantButton based on the view that's wrapping it.
// If this view is in the screen size, you can use default width by only passing size props

const AddPlantButtonComponent: React.ElementType<AddPlantButtonComponentProps> = ({setModalVisible
}: AddPlantButtonComponentProps) => {
  const navigation = useNavigation()
  const onPress = () => {
    setModalVisible(true)
    navigation.navigate("InsertPlant")
  };
  return (
    <AddPlantButtonContainer onPress={onPress}>
      <AddPlantButtonText>+</AddPlantButtonText>
    </AddPlantButtonContainer>
  );
};

export default AddPlantButtonComponent;
