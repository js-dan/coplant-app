import * as React from 'react';
import { Alert, ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ButtonContainer, ButtonText, Icon } from './style';
import axios from 'axios'

export interface ButtonPostOrderComponentPropsProps {
  buttonColor?: string;
  textColor?: string;
  buttonText?: string;
  size?: string;
  icon?: string;
  width?: string;
  stage?: string;
  postOrder?:boolean;
  onButtonPress: () => void;
}

// Propriety width works to personalize your button based on the view that's wrapping it.
// If this view is in the screen size, you can use default width by only passing size props

const ButtonPostOrderComponentProps: React.ElementType<ButtonPostOrderComponentPropsProps> = ({
  buttonColor, textColor, buttonText, size, icon, width, stage, postOrder, onButtonPress
}: ButtonPostOrderComponentPropsProps) => {
  const navigation = useNavigation()
  const onPress = () => {postOrder? 
    axios.post('http://192.168.0.3:3001/order/create', {
      start_date: "99/99/99",
      end_date: "10/10/10",
	  id_client: "1",
	  price:"999.99",
	  score_caregiver:4,
 	  score_client:5,
	  comment:"teste",
	  description:"teste",
	  id_caregiver: "2",
      order_status:"opened"
    })
    .then(function (response) {
      onButtonPress()
      navigation.navigate(stage);
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
      Alert.alert(
        "Erro de conexão",
        "Não conseguimos fazer seu pedido",
        [
          { text: "Ok", onPress: () => onButtonPress() }
        ]
      );
       
    })
  :navigation.navigate(stage);}
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

export default ButtonPostOrderComponentProps;
