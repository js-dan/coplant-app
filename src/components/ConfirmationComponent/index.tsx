import * as React from 'react';
import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
import { Alert, ImageSourcePropType, Modal } from 'react-native';
import ButtonPostOrderComponent from '../ButtonPostOrderComponent';

import {
  ConfirmationContainer, DescriptionText, ConfirmationText, ConfirmationArea, ConfirmationTitle
} from './style';

export interface ConfirmationComponentProps {
  value:number;
  description?:string;
}

const ConfirmationComponent: React.ElementType<ConfirmationComponentProps> = ({
  value, description
}: ConfirmationComponentProps) => {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [descriptionText, setdescriptionText] = React.useState('')
  return (
    <ConfirmationContainer>
      <ConfirmationTitle>{"Digite aqui detalhes da transação"}</ConfirmationTitle>
      <DescriptionText placeholder="Descrição..." onChangeText={setdescriptionText}/>
      <ConfirmationArea>
        <ConfirmationText>{`Valor: R$ ${value}`}</ConfirmationText>
        <ButtonPostOrderComponent
          buttonColor="orange"
          buttonText="Confirmar"
          size="small"
          width="40%"
          stage="Cuidadores"
          description={descriptionText}
          postOrder={true}

        />
      </ConfirmationArea>
    </ConfirmationContainer>


  );
};

export default ConfirmationComponent;
