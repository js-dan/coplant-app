import React from 'react';
import {EvaluationButtonComponent, Screen, EvaluationComponent, ComplimentsComponent } from '../../components';

const Evaluation: React.FC = () => (
  <Screen>
   <EvaluationComponent/>
   <ComplimentsComponent/>
   <EvaluationButtonComponent/>
  </Screen>
);

export default Evaluation;
