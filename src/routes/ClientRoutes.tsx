import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Home,
  CaregiverListage,
  Caregiver,
  Confirmation,
  Thanks,
  Historic,
  Chat,
  Evaluation,
  User,
  Promotion,
} from '../pages/index';

const { Navigator, Screen } = createStackNavigator();

const ClientRoutes: React.FC = () => (
  <Navigator headerMode="none">
    <Screen name="Home" component={Home} />
    <Screen name="CaregiverListage" component={CaregiverListage} />
    <Screen name="Caregiver" component={Caregiver} />
    <Screen name="Confirmation" component={Confirmation} />
    <Screen name="Thanks" component={Thanks} />
    <Screen name="Historic" component={Historic} />
    <Screen name="Chat" component={Chat} />
    <Screen name="Evaluation" component={Evaluation} />
    <Screen name="User" component={User} />
    <Screen name="Promotion" component={Promotion} />
  </Navigator>
);

export default ClientRoutes;
