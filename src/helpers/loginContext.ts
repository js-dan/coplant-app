import { createContext } from 'react';

export const LoginContext = createContext(null);

export const loginReducer = (state, action) => {
  switch (action.type) {
    case 'CAREGIVER':
      return {
        isLogged: true,
        isCaregiver: true,
      };
    case 'CLIENT':
      return {
        isLogged: true,
        isCaregiver: false,
      };
    case 'UNLOG':
      return {
        isLogged: false,
        isCaregiver: false,
      };
    default:
      return state;
  }
};

export const loginInitialValue = {
  isLogged: false,
  isCaregiver: false,
};
