import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Home,
} from '../pages/index';

const { Navigator, Screen } = createStackNavigator();

const ClientRoutes: React.FC = () => (
  <Navigator headerMode="none">
    <Screen name="Home" component={Home} />
  </Navigator>
);

export default ClientRoutes;
