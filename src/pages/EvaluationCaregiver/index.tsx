import React from 'react';
import {EvaluationButtonComponent, Screen, EvaluationComponent, ComplimentsComponent } from '../../components';

const Evaluation: React.FC = () => (
  <Screen>
   <EvaluationComponent
    isUser={false}
   />
   <ComplimentsComponent
   isUser={false}
   />
   <EvaluationButtonComponent/>
   
  </Screen>
);

export default Evaluation;
