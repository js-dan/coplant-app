import React from 'react';
import {EvaluationButtonComponent, Screen, EvaluationComponent, ComplimentsComponent } from '../../components';

const Evaluation: React.FC = () => (
  <Screen>
   <EvaluationComponent
    isUser={true}
   />
   <ComplimentsComponent
   isUser={true}
   />
   <EvaluationButtonComponent/>
  </Screen>
);

export default Evaluation;
