import * as React from "react";
import { Rating, AirbnbRating } from 'react-native-ratings';
import {ButtonComponent} from ".."
import { ImageSourcePropType } from "react-native";

import { ComplimentsContainer, ComplimentsText, MessageText} from "./style";


export interface ComplimentsProps {
  value?:number
}

const ComplimentsComponent: React.ElementType<ComplimentsProps> = ({
  value
}: ComplimentsProps) => {
  return (
    <ComplimentsContainer>
     
      <ComplimentsText>{"Quais os elogios ao cuidador?"}</ComplimentsText>
      <MessageText placeholder="Mensagem..." />
      
    </ComplimentsContainer>
    
  );
};

export default ComplimentsComponent;