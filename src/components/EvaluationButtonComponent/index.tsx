import * as React from "react";
import { Rating, AirbnbRating } from 'react-native-ratings';
import {ButtonComponent} from ".."
import { ImageSourcePropType } from "react-native";

import { EvaluationButtonContainer, } from "./style";


export interface EvaluationButtonProps {
}

const EvaluationButtonComponent: React.ElementType<EvaluationButtonProps> = ({
}: EvaluationButtonProps) => {
  return (
    <EvaluationButtonContainer>
      <ButtonComponent
        buttonColor="orange"
        buttonText="Confirmar"
        size="small"
        width="100%"
        textColor="white"
      />
    </EvaluationButtonContainer>
    
  );
};

export default EvaluationButtonComponent;