import * as React from 'react';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { ImageSourcePropType } from 'react-native';
import ButtonComponent from '../ButtonComponent';

import { EvaluationButtonContainer } from './style';

export interface EvaluationButtonProps {
}

const EvaluationButtonComponent: React.ElementType<EvaluationButtonProps> = ({
}: EvaluationButtonProps) => (
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

export default EvaluationButtonComponent;
