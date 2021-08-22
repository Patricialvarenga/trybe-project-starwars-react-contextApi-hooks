import React, { useContext } from 'react';
import Context from '../context/Context';

function Filter() {
  const { name, options, options2, guardaName, guardaComparison, guardaValor,
    Filtrar } = useContext(Context);
  return (
    <div>
      <select data-testid="column-filter" onChange={ guardaName } value={ name }>
        { options.map((option) => <option key={ option }>{option}</option>) }
      </select>
      <select data-testid="comparison-filter" onChange={ guardaComparison }>
        { options2.map((option2) => <option key={ option2 }>{option2}</option>) }
      </select>
      <input data-testid="value-filter" type="number" onChange={ guardaValor } />
      <button type="button" data-testid="button-filter" onClick={ Filtrar }>
        Filtrar
      </button>
    </div>
  );
}

export default Filter;
