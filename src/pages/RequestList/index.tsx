import React from "react";
import { ScrollView, View, Text } from "react-native";
import { ButtonComponent, Screen, Divider} from "../../components";
import theme from "../../assets/theme";
import {RequestCardComponent, RequestCardActiveComponent, HeaderComponent} from "../../components"
import { Background, SectionTitle, ButtonContainer } from "./style";

const RequestList: React.FC = () => (
  <Screen>
    <Background>
      <HeaderComponent headerText="Solicitações" arrowLeft="true" shareIcon="true"></HeaderComponent>
      <SectionTitle>Em aberto</SectionTitle>
      <View style={{ height: 230, marginTop: 20 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <RequestCardActiveComponent
            userName={"Liz Andrade"}
            stars={5}
            userLocation={"Casa Amarela"}
            startDate={new Date("2020-10-10")}
            endDate={new Date("2020-10-12")}
          />
          <RequestCardActiveComponent
            userName={"Liz Andrade"}
            stars={5}
            userLocation={"Casa Amarela"}
            startDate={new Date("2020-10-10")}
            endDate={new Date("2020-10-12")}
          />
          <RequestCardActiveComponent
            userName={"Liz Andrade"}
            stars={5}
            userLocation={"Casa Amarela"}
            startDate={new Date("2020-10-09")}
            endDate={new Date("2020-10-12")}
          />
        </ScrollView>
      </View>
      <Divider />
      <SectionTitle>Histórico</SectionTitle>
      <View style={{marginTop: 20}}>
        <ScrollView>
          <RequestCardComponent
            userName={"Liz Andrade"}
            stars={5}
            userLocation={"Casa Amarela"}
            startDate={new Date("2020-10-10")}
            endDate={new Date("2020-10-12")}
            finished={"Encerrado"}
          />
          <RequestCardComponent
            userName={"Liz Andrade"}
            stars={5}
            userLocation={"Casa Amarela"}
            startDate={new Date("2020-10-10")}
            endDate={new Date("2020-10-12")}
            finished={"Em aberto"}
          />
          <RequestCardComponent
            userName={"Liz Andrade"}
            stars={5}
            userLocation={"Casa Amarela"}
            startDate={new Date("2020-10-09")}
            endDate={new Date("2020-10-12")}
            finished={"Encerrado"}
          />
        </ScrollView>
      </View>
      
    </Background>
  </Screen>
);

export default RequestList;
