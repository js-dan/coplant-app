import React from "react";
import { ButtonComponent, Screen } from "../../components";
import CommentComponent from "../../components/CommentComponent";

const Home: React.FC = () => (
  <Screen>
    <CommentComponent
      usersName={"Elisa"}
      usersComment={ "Foi um excelente cuidador. Minhas plantas ficaram ainda mais lindas"}
      stars={5}
    />
    <CommentComponent
      usersName={"Danilo"}
      usersComment={ "Parabéns aos desenvolvedores desse aplicativo"}
      stars={1}
    />
  </Screen>
);

export default Home;
