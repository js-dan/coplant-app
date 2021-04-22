import React from 'react';
import TagComponent from '../../components/TagComponent';
import HeaderComponent from '../../components/HeaderComponent';
import { ButtonComponent, Screen, Divider, RequestCardComponent } from "../../components";
import DescriptionComponent from "../../components/CaregiverDescriptionComponent";

const Home: React.FC = () => (
  <Screen>
   <RequestCardComponent
    userName={"Liz Andrade"}
    stars={5}
    userLocation={"Casa Amarela"}
    startDate={new Date("2020-10-10")}
    endDate={new Date("2020-10-12")}
    />
  </Screen>
);

export default Home;
