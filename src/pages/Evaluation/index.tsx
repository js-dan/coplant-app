import React from 'react';
import { ButtonComponent, Screen, EvaluationComponent, ComplimentsComponent } from '../../components';

const Evaluation: React.FC = () => (
  <Screen>
   <EvaluationComponent/>
   <ComplimentsComponent/>
   <ButtonComponent
      buttonColor="orange"
      buttonText="Confirmar"
      size="small"
      width="10%"
    />
  </Screen>
);

export default Evaluation;
