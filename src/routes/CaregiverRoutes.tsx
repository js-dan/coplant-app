import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Home,
  CaregiverProfile,
} from '../pages/index';

const { Navigator, Screen } = createStackNavigator();

const CaregiverRoutes: React.FC = () => (
  <Navigator headerMode="none">
    <Screen name="Home" component={Home} />
    <Screen name="CaregiverProfile" component={CaregiverProfile} />
  </Navigator>
);

export default CaregiverRoutes;
