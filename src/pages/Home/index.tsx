import React from "react";
import { ButtonComponent, Screen, Divider } from "../../components";
import DescriptionComponent from "../../components/CaregiverDescriptionComponent";

const Home: React.FC = () => (
  <Screen>
    <DescriptionComponent
      description="Eu sou Caio e adoro cuidar de plantas. Faço isso há 10 anos e adoraria
      poder te ajudar a ter uma casa bem verde."
    />
    <Divider />
    <ButtonComponent buttonColor="orange" buttonText="Contratar" size="big" />
  </Screen>
);

export default Home;
