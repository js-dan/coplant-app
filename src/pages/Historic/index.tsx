import React from "react";
import { ScrollView, View, Text } from "react-native";
import { ButtonComponent, Screen, Divider} from "../../components";
import theme from "../../assets/theme";
import {HistoricCardComponent, HeaderComponent} from "../../components"
import { Background, SectionTitle, ButtonContainer } from "./style";

const Historic: React.FC = () => (
  <Screen>
    <Background>
      <HeaderComponent headerText="Histórico dos Cuidadores"/>
      <View style={{marginTop: 20}}>
        <ScrollView>
          <HistoricCardComponent
            userName={"Caio Andrade"}
            endDate={new Date("2020-10-12")}
            finished={true}
            rated={false}
            remainingDays={5}
          />
          <HistoricCardComponent
            userName={"Caio Andrade"}
            endDate={new Date("2020-10-12")}
            finished={true}
            rated={true}
            remainingDays={0}
          />
          <HistoricCardComponent
            userName={"Caio Andrade"}
            endDate={new Date("2020-10-12")}
            finished={true}
            rated={true}
            remainingDays={0}
          />
        </ScrollView>
      </View>
      
    </Background>
  </Screen>
);

export default Historic;
