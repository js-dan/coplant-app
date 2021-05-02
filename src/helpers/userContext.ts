import { createContext } from 'react';

export const UserContext = createContext(null);

export const userReducer = (state, action) => {
  const {
    name,
    email,
    phone,
    id,
    isAdmin,
  } = action;

  const userInfo = {
    name,
    email,
    phone,
    id,
    isAdmin,
  };

  switch (action.type) {
    case 'save':
      return userInfo;
    case 'exit':
      return userInitialValue;
    default:
      return state;
  }
};

export const userInitialValue = {
  name: '',
  email: '',
  phone: '',
  id: '',
  isAdmin: false,
};
