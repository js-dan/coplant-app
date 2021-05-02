import React from 'react';
import ConfirmationRequestComponent from '../../components/ConfirmationRequestComponent';
import { ButtonComponent, Screen, Divider } from "../../components";

const RequestConfirmation: React.FC = () => (
  <Screen>
    <ConfirmationRequestComponent
      userName={"Liz Andrade"}
      stars={5}
      userLocation={"Casa Amarela"}
      startDate={new Date("2020-10-10")}
      endDate={new Date("2020-10-12")}
      plants={["coentro", "onze-horas"]}
      before={true}
    />
  </Screen>
);

export default RequestConfirmation;
