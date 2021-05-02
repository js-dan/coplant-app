import * as React from 'react';
import { ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ButtonContainer, ButtonText, Icon } from './style';
import axios from 'axios'

export interface ButtonComponentProps {
  buttonColor?: string;
  textColor?: string;
  buttonText?: string;
  size?: string;
  icon?: string;
  width?: string;
  stage?: string;
  postPlant?:boolean;
  onButtonPress?: () => void;
}

// Propriety width works to personalize your button based on the view that's wrapping it.
// If this view is in the screen size, you can use default width by only passing size props

const ButtonComponent: React.ElementType<ButtonComponentProps> = ({
  buttonColor, textColor, buttonText, size, icon, width, stage, postPlant, onButtonPress
}: ButtonComponentProps) => {
  const navigation = useNavigation()
  const onPress = onButtonPress
  return(
    <ButtonContainer
      icon={icon}
      activeOpacity={0.8}
      onPress={onPress ? onButtonPress : ()=>{navigation.navigate(stage)}}
      size={size}
      buttonColor={buttonColor}
      width={width}
    >
      { icon && (<Icon source={icon as ImageSourcePropType} />) }
      <ButtonText color={textColor}>{buttonText}</ButtonText>
    </ButtonContainer>
  );
};

export default ButtonComponent;
