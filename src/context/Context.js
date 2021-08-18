import { createContext } from 'react';

const INITIAL_STATE = {
  data: [],
};

const Context = createContext(INITIAL_STATE);

export default Context;
