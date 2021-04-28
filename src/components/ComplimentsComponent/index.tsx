import * as React from 'react';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { ImageSourcePropType } from 'react-native';
import ButtonComponent from '../ButtonComponent';

import { ComplimentsContainer, ComplimentsText, MessageText } from './style';

export interface ComplimentsProps {
  message?:string
}

const ComplimentsComponent: React.ElementType<ComplimentsProps> = ({
  message,
}: ComplimentsProps) => (
  <ComplimentsContainer>

    <ComplimentsText>Quais os elogios ao cuidador?</ComplimentsText>
    <MessageText placeholder="Mensagem...">{message}</MessageText>

  </ComplimentsContainer>

);

export default ComplimentsComponent;
