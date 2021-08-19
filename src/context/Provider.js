import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const contextValue = {
    data,
    setData,
    filters: {
      filterByName: {
        name,
        setName,
      },
    },
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
