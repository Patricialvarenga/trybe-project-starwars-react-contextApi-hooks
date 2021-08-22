import React, { useContext } from 'react';
import Context from '../context/Context';

function Input() {
  const { filterName } = useContext(Context);

  return (
    <input
      data-testid="name-filter"
      name="name"
      type="text"
      onChange={ filterName }
    />
  );
}

export default Input;
