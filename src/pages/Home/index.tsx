import React from 'react';
import { ButtonComponent, Screen} from '../../components';
import TagComponent from '../../components/TagComponent';
import HeaderComponent from '../../components/HeaderComponent';
import Icons from '../../assets/icons/index';
        
const Home: React.FC = () => (
  <Screen>
    <DescriptionComponent
      description="Eu sou Caio e adoro cuidar de plantas. Faço isso há 10 anos e adoraria
      poder te ajudar a ter uma casa bem verde."
    />
    <Divider />
    <ButtonComponent
      buttonColor="orange"
      buttonText="Contratar"
      size="big"
      textColor="white"
    />
    <TagComponent text="Cuidadoso"></TagComponent>
    <HeaderComponent headerText="Perfil Cuidador" arrowLeft={Icons.header.ArrowLeft} shareIcon={Icons.header.ShareIcon}></HeaderComponent>
  </Screen>
);

export default Home;
