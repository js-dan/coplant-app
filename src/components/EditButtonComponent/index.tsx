import * as React from 'react';
import { ImageSourcePropType } from 'react-native';

import {UserImage } from './style';

export interface EditButtonComponentProps {
  
}

// Propriety width works to personalize your AddPlantButton based on the view that's wrapping it.
// If this view is in the screen size, you can use default width by only passing size props

const EditButtonComponent: React.ElementType<EditButtonComponentProps> = ({
}: EditButtonComponentProps) => {
  const onPress = () => console.log('função aqui');
  return (
    <UserImage source={require('../../assets/icons/edit.svg')} />
  );
};

export default EditButtonComponent;
