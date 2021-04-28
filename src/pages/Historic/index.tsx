import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import {
  ButtonComponent, Screen, Divider, HistoricCardComponent, HeaderComponent,
} from '../../components';
import theme from '../../assets/theme';

import { Background, SectionTitle, ButtonContainer } from './style';

const Historic: React.FC = () => (
  <Screen>
    <Background>
      <HeaderComponent headerText="Histórico dos Cuidadores" />
      <View style={{ marginTop: 20 }}>
        <ScrollView>
          <HistoricCardComponent
            userName="Caio Andrade"
            endDate={new Date('2020-10-12')}
            finished={false}
            rated={false}
            remainingDays={5}
          />
          <HistoricCardComponent
            userName="Caio Andrade"
            endDate={new Date('2020-10-12')}
            finished
            rated={false}
          />
          <HistoricCardComponent
            userName="Caio Andrade"
            endDate={new Date('2020-10-12')}
            finished
            rated
          />
        </ScrollView>
      </View>

    </Background>
  </Screen>
);

export default Historic;
