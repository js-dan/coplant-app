import * as React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ButtonComponent} from "../"
import { ImageSourcePropType } from "react-native";

import { ConfirmationContainer, DescriptionText, ConfirmationText, ConfirmationArea, Icon } from "./style";

export interface ConfirmationComponentProps {
  startDate?:Date;
  endDate?:Date;
  value:number;
  description?:string;
}

const ConfirmationComponent: React.ElementType<ConfirmationComponentProps> = ({
  startDate, endDate, value, description
}: ConfirmationComponentProps) => {
  var setStartDate, setEndDate;
  [startDate, setStartDate] = React.useState(new Date());
  [endDate, setEndDate] = React.useState(new Date());
  return (
    <ConfirmationContainer>
      <ConfirmationText>{"Data Inicio"}</ConfirmationText>
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
      <ConfirmationText>{"Data Fim"}</ConfirmationText>
      <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
      <DescriptionText placeholder="Descrição..." >{description}</DescriptionText>
      <ConfirmationArea>
        <ConfirmationText>{"Valor: R$"+value}</ConfirmationText>
        <ButtonComponent
          buttonColor="orange"
          buttonText="Confirmar"
          size="small"
          width="40%"
        />
      </ConfirmationArea>
    </ConfirmationContainer>
  );
};

export default ConfirmationComponent;