import { createContext } from 'react';

const INITIAL_STATE = {
  data: [],
  name: '',
};

const Context = createContext(INITIAL_STATE);

export default Context;
