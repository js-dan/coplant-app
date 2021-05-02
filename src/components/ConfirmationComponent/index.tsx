import * as React from 'react';
import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
import { ImageSourcePropType, Modal, Alert } from 'react-native';
import ButtonComponent from '../ButtonComponent';

import {
  ConfirmationContainer, DescriptionText, ConfirmationText, ConfirmationArea,
} from './style';

export interface ConfirmationComponentProps {
  value:number;
  visibility: boolean;
  description?:string;
}

const ConfirmationComponent: React.ElementType<ConfirmationComponentProps> = ({
  value, description, visibility
}: ConfirmationComponentProps) => {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  let modalVisible: boolean = visibility

  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      Alert.alert("Modal has been closed.");
      () => {modalVisible = !modalVisible}
    }}>
      <ConfirmationContainer>
        <ConfirmationText>Data Inicio</ConfirmationText>

        {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
        <ConfirmationText>Data Fim</ConfirmationText>
        {/* <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} /> */}
        <DescriptionText placeholder="Descrição..." />

        <ConfirmationArea>
          <ConfirmationText>{`Valor: R$ ${value}`}</ConfirmationText>
          <ButtonComponent
            buttonColor="orange"
            buttonText="Confirmar"
            size="small"
            width="40%"
            stage="Chat"
          />
        </ConfirmationArea>
    </ConfirmationContainer>
    </Modal>

  );
};

export default ConfirmationComponent;
