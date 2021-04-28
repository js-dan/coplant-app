import * as React from 'react';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { ImageSourcePropType } from 'react-native';
import ButtonComponent from '../ButtonComponent';

import { ComplimentsContainer, ComplimentsText, MessageText } from './style';

export interface ComplimentsProps {
  message?:string
  isUser?:boolean
}

const ComplimentsComponent: React.ElementType<ComplimentsProps> = ({
  message, isUser
}: ComplimentsProps) => {
  return (
    <ComplimentsContainer>
     
      <ComplimentsText>{`Quais os elogios ao ${isUser ? "Cuidador" : "Solicitante"}?`}</ComplimentsText>
      <MessageText placeholder="Mensagem...">{message}</MessageText>
      
    </ComplimentsContainer>
    
  );
};

    <ComplimentsText>Quais os elogios ao cuidador?</ComplimentsText>
    <MessageText placeholder="Mensagem...">{message}</MessageText>

  </ComplimentsContainer>

);

export default ComplimentsComponent;
