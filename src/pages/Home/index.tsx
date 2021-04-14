import React from 'react';
import { ButtonComponent, Screen} from '../../components';
import TagComponent from '../../components/TagComponent';
import HeaderComponent from '../../components/HeaderComponent';
import Icons from '../../assets/icons/index';
const Home: React.FC = () => (
  <Screen>
    <ButtonComponent
      buttonColor="orange"
      buttonText="eitaPlantinha"
      size="small"
    />
    <TagComponent text="Cuidadoso"></TagComponent>
    <HeaderComponent headerText="Perfil Cuidador" arrowLeft={Icons.header.ArrowLeft} shareIcon={Icons.header.ShareIcon}></HeaderComponent>
  </Screen>
);

export default Home;
