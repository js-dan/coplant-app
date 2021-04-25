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
            finished={false}
            rated={false}
          />
          <HistoricCardComponent
            userName={"Caio Andrade"}
            endDate={new Date("2020-10-12")}
            finished={true}
            rated={false}
          />
          <HistoricCardComponent
            userName={"Caio Andrade"}
            endDate={new Date("2020-10-12")}
            finished={true}
            rated={true}
          />
        </ScrollView>
      </View>
      
    </Background>
  </Screen>
);

export default Historic;
