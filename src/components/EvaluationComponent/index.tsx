import * as React from "react";
import { Rating, AirbnbRating } from 'react-native-ratings';
import {ButtonComponent} from ".."
import { ImageSourcePropType } from "react-native";

import { EvaluationContainer, EvaluationText, MessageText} from "./style";


export interface EvaluationProps {
  value?:number
}

const EvaluationComponent: React.ElementType<EvaluationProps> = ({
  value
}: EvaluationProps) => {
  return (
    <EvaluationContainer>
      <EvaluationText>{"Avaliação do cuidador: "}</EvaluationText>
      <Rating/>
    </EvaluationContainer>
    
  );
};

export default EvaluationComponent;