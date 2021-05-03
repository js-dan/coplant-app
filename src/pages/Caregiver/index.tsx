import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { ButtonComponent, Screen, Divider, ConfirmationComponent } from "../../components";
import DescriptionComponent from "../../components/CaregiverDescriptionComponent";
import CommentComponent from "../../components/CommentComponent";
import PresentCardComponent from "../../components/PresentCardComponent"
import HeaderComponent from "../../components/HeaderComponent";
import theme from "../../assets/theme";
import { Background, SectionTitle, ButtonContainer, Darkforeground } from "./style";
import YoutubePlayer from "react-native-youtube-iframe";

const Caregiver: React.FC = () => {

  return(
    <Screen>
      <Background>
        <PresentCardComponent
          userName="Caio Andrade"
          stars={3}
          userLocation="Casa Amarela"
        />
        <YoutubePlayer height={300} play videoId="Pfj0ptXWtro" />

        <Divider />
        <DescriptionComponent
          description="Eu sou Caio e adoro cuidar de plantas. Faço isso há 10 anos e adoraria
        poder te ajudar a ter uma casa bem verde."
        />
        <Divider />
        <SectionTitle>
          Comentários
        </SectionTitle>
        <View style={{ height: 150, marginTop: 20 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <CommentComponent
              usersName="Daniela"
              stars={5}
              usersComment="Wow, amazing guys!"
            />
            <CommentComponent
              usersName="Daniel"
              stars={5}
              usersComment="Wow, amazing guys!"
            />
            <CommentComponent
              usersName="Daniel"
              stars={5}
              usersComment="Wow, amazing guys!"
            />
          </ScrollView>
        </View>
        <Divider />
        <ButtonContainer>
          <ButtonComponent
            buttonColor="orange"
            buttonText="Contratar"
            size="large"
            textColor="white" 
            stage="Confirmation"
          />
        </ButtonContainer>
      </Background>
    </Screen>
  )};

export default Caregiver;
