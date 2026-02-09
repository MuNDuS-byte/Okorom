import { createContext } from 'react';

const cartContext = createContext({
  addOrder: () => {},
  deleteOrder: () => {},
  order: [],
});

export default cartContext;
