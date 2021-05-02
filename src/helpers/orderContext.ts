import { createContext } from 'react';

export const OrderContext = createContext(null);

export const orderReducer = (state, action) => {
  const {
    orderID,
  } = action;

  const orderInfo = {
    orderID,
  };

  switch (action.type) {
    case 'open':
      return {
        isOpen: true,
        ...orderInfo,
      };
    case 'closed':
      return {
        isOpen: false,
        ...orderInfo,
      };
    default:
      return state;
  }
};

export const orderInitialValue = {
  isOpen: false,
  orderID: '',
};
