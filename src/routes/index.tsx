/* eslint-disable no-nested-ternary */
import React, { useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import CaregiverRoutes from './CaregiverRoutes';
import ClientRoutes from './ClientRoutes';
import AuthRoutes from './AuthRoutes';

import { LoginContext, loginInitialValue, loginReducer } from '../helpers/loginContext';
import { OrderContext, orderInitialValue, orderReducer } from '../helpers/orderContext';

const Routes: React.FC = () => {
  const [authorization, authorizationDispatch] = useReducer(loginReducer, loginInitialValue);
  const [order, orderDispatch] = useReducer(orderReducer, orderInitialValue);

  return (
    <LoginContext.Provider value={{ authorization, authorizationDispatch }}>
      <OrderContext.Provider value={{ order, orderDispatch }}>
        <NavigationContainer>
          {authorization.isLogged
            ? (authorization.isCaregiver ? <CaregiverRoutes /> : <ClientRoutes />)
            : <AuthRoutes />}
        </NavigationContainer>
      </OrderContext.Provider>
    </LoginContext.Provider>
  );
};

export default Routes;
