import * as React from 'react';
import { ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ButtonContainer, ButtonText, Icon } from './style';
import axios from 'axios'

export interface ButtonPostPlantComponentProps {
  buttonColor?: string;
  textColor?: string;
  buttonText?: string;
  size?: string;
  icon?: string;
  width?: string;
  stage?: string;
  postPlant?:boolean;
  name?:string;
  qtd?:number;
  onButtonPress: () => void;
}

// Propriety width works to personalize your button based on the view that's wrapping it.
// If this view is in the screen size, you can use default width by only passing size props

const ButtonPostPlantComponent: React.ElementType<ButtonPostPlantComponentProps> = ({
  buttonColor, textColor, buttonText, size, icon, width, stage, postPlant, name, qtd, onButtonPress
}: ButtonPostPlantComponentProps) => {
  const navigation = useNavigation()
  const onPress = () => {
    onButtonPress()
    
    axios.post('http://192.168.0.3:3001/plant/create', {
      name: name,
      imageURL: 'Flintstone',
      qtd: qtd
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  return(
    <ButtonContainer
      icon={icon}
      activeOpacity={0.8}
      onPress={onPress}
      size={size}
      buttonColor={buttonColor}
      width={width}
    >
      { icon && (<Icon source={icon as ImageSourcePropType} />) }
      <ButtonText color={textColor}>{buttonText}</ButtonText>
    </ButtonContainer>
  );
};

export default ButtonPostPlantComponent;
