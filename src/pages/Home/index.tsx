import React from "react";
import { ButtonComponent, Screen } from "../../components";
import CommentComponent from "../../components/CommentComponent";

const Home: React.FC = () => (
  <Screen>
    <ButtonComponent
      buttonColor="orange"
      buttonText="Olha a pedra"
      size="small"
    />
    <CommentComponent
      usersName={"Elisa"}
      usersComment={
        "Foi um excelente cuidador. Minhas plantas ficaram ainda mais lindas"
      }
      stars={5}
    />
  </Screen>
);

export default Home;
