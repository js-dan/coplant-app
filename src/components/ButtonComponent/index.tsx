import * as React from 'react';
import { ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ButtonContainer, ButtonText, Icon } from './style';

export interface ButtonComponentProps {
  buttonColor?: string;
  textColor?: string;
  buttonText?: string;
  size?: string;
  icon?: string;
  width?: string;
  stage?: number
}

// Propriety width works to personalize your button based on the view that's wrapping it.
// If this view is in the screen size, you can use default width by only passing size props

const ButtonComponent: React.ElementType<ButtonComponentProps> = ({
  buttonColor, textColor, buttonText, size, icon, width, stage
}: ButtonComponentProps) => {
  const navigation = useNavigation()
  const onPress = () => {stage==1?navigation.navigate("Chat"):
                        (stage==2?navigation.navigate("Evaluation"):
                        (stage==4?navigation.navigate("Caregiver"):
                        (stage==5?navigation.navigate("RequestConfirmationFinalizar"):
                        (stage==6?navigation.navigate("RequestList"):
                        navigation.navigate("Confirmation")))))}
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

export default ButtonComponent;
