import React from 'react';
import Provider from './context/Provider';
import Filter from './components/Filter';
import Table from './components/Table';
import Input from './components/Input';

import './App.css';

function App() {
  return (
    <Provider>
      <Input />
      <Filter />
      <Table />
    </Provider>
  );
}

export default App;
