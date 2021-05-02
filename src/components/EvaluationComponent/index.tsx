import * as React from "react";
import { Rating, AirbnbRating } from 'react-native-ratings';
import ButtonComponent from "../ButtonComponent"
import { ImageSourcePropType } from "react-native";

import { EvaluationContainer, EvaluationText, MessageText} from "./style";


export interface EvaluationProps {
  value?:number;
  isUser?:boolean;
}

const EvaluationComponent: React.ElementType<EvaluationProps> = ({
  value, isUser
}: EvaluationProps) => {
  return (
    <EvaluationContainer>
      <EvaluationText>{`Avaliação do ${isUser ? "Cuidador" : "Solicitante"}`}</EvaluationText>
      <Rating>{value}</Rating>
    </EvaluationContainer>
    
  );
};

export default EvaluationComponent;