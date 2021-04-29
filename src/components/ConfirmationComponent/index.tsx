import * as React from 'react';
import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
import { ImageSourcePropType } from 'react-native';
import ButtonComponent from '../ButtonComponent';

import {
  ConfirmationContainer, DescriptionText, ConfirmationText, ConfirmationArea,
} from './style';

export interface ConfirmationComponentProps {
  value:number;
  description?:string;
}

const ConfirmationComponent: React.ElementType<ConfirmationComponentProps> = ({
   value, description,
}: ConfirmationComponentProps) => {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  return (
    <ConfirmationContainer>
      <ConfirmationText>{"Data Inicio"}</ConfirmationText>
      
      {/*<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />*/}
      <ConfirmationText>{"Data Fim"}</ConfirmationText>
      {/*<DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />*/}
      <DescriptionText placeholder="Descrição..."></DescriptionText>
      
      <ConfirmationArea>
        <ConfirmationText>{"Valor: R$ "+value}</ConfirmationText>
        <ButtonComponent
          buttonColor="orange"
          buttonText="Confirmar"
          size="small"
          width="40%"
          stage={1}
        />
      </ConfirmationArea>
    </ConfirmationContainer>
  );
};

export default ConfirmationComponent;
