import * as React from 'react';
import { ImageSourcePropType } from 'react-native';

import { AddPlantButtonContainer, AddPlantButtonText, Icon } from './style';

export interface AddPlantButtonComponentProps {

}

// Propriety width works to personalize your AddPlantButton based on the view that's wrapping it.
// If this view is in the screen size, you can use default width by only passing size props

const AddPlantButtonComponent: React.ElementType<AddPlantButtonComponentProps> = ({
}: AddPlantButtonComponentProps) => {
  const onPress = () => console.log('função aqui');
  return (
    <AddPlantButtonContainer>
      <AddPlantButtonText>+</AddPlantButtonText>
    </AddPlantButtonContainer>
  );
};

export default AddPlantButtonComponent;
