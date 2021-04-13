import * as React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ButtonComponent} from "../"
import { ImageSourcePropType } from "react-native";

import { ConfirmationContainer, DescriptionText, ConfirmationText, Icon } from "./style";

export interface ConfirmationComponentProps {
  dateStart?:Date;
  dateEnd?:Date;
  value:number;
  description:string;
}

const ConfirmationComponent: React.ElementType<ConfirmationComponentProps> = ({
  dateStart, dateEnd, value, description
}: ConfirmationComponentProps) => {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  return (
    <ConfirmationContainer>
      <ConfirmationText>{"Data Inicio"}</ConfirmationText>
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
      <ConfirmationText>{"Data Fim"}</ConfirmationText>
      <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
      <DescriptionText placeholder="Descrição..." />
      <ConfirmationText>{"Valor: "+value}</ConfirmationText>
      <ButtonComponent
        buttonColor="orange"
        buttonText="Confirmar"
        size="small"
        width="large"
      />
      
    </ConfirmationContainer>
  );
};

export default ConfirmationComponent;