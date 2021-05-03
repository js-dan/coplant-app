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
        <ScrollView style={{padding: "5%"}}>
          <HistoricCardComponent
            userName="Carla Maria"
            endDate={new Date('2020-10-12')}
            finished={false}
            rated={false}
            userImage="liz"
            remainingDays={5}
          />

          <HistoricCardComponent
            userName="Ligia Costa"
            endDate={new Date('2020-10-12')}
            finished={true}
            rated={false}
            userImage="ligia"
            remainingDays={5}
          />

          <HistoricCardComponent
            userName="João Pereira"
            endDate={new Date('2020-10-12')}
            finished={true}
            rated={false}
            userImage="caio"
            remainingDays={5}
          />

          <HistoricCardComponent
            userName="Ana Claudia"
            endDate={new Date('2020-10-12')}
            finished={true}
            rated={true}
            userImage="claudia"
            remainingDays={5}
          />



        </ScrollView>
    </Background>
  </Screen>
);

export default Historic;
