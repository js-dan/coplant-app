import * as React from 'react';
import { ImageSourcePropType } from 'react-native';

import { AddMediaContainer, AddMediaText, Icon } from './style';

export interface AddMediaComponentProps {
  
}

// Propriety width works to personalize your AddMedia based on the view that's wrapping it.
// If this view is in the screen size, you can use default width by only passing size props

const AddMediaComponent: React.ElementType<AddMediaComponentProps> = ({
}: AddMediaComponentProps) => {
  const onPress = () => console.log('função aqui');
  return (
    <AddMediaContainer>
      <AddMediaText>{"+ Add Media"}</AddMediaText>
    </AddMediaContainer>
  );
};

export default AddMediaComponent;
