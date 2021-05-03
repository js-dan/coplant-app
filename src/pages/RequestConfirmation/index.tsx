import React from 'react';
import ConfirmationRequestComponent from '../../components/ConfirmationRequestComponent';
import { ButtonComponent, Screen, Divider } from "../../components";
import { useRoute, RouteProp } from '@react-navigation/native';

const RequestConfirmation: React.FC = () => {
  
  const route = useRoute();
  return(
  <Screen>
    <ConfirmationRequestComponent
      userName={String(route.params.userName)}
      stars={Number(route.params.stars)}
      userLocation={String(route.params.userLocation)}
      startDate={new Date(String(route.params.startDate))}
      endDate={new Date(String(route.params.endDate))}
      plants={["coentro", "onze-horas"]}
      before={true}
    />
  </Screen>
);
};

export default RequestConfirmation;
