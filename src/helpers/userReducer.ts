import { createContext } from 'react';

export const UserContext = createContext(null);

export const userReducer = (state, action) => {
  const {
    name,
    email,
    address,
    id,
    isCaregiver,
    description,
    token,
    score
  } = action;

  const userInfo = {
    name,
    email,
    address,
    id,
    isCaregiver,
    description,
    token,
    score
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
  address: '',
  id: '',
  isCaregiver: false,
  description: '',
  token: '',
  score: '',
};