import React, { useContext } from 'react';
import Context from '../context/Context';

// Para estruturar a tabela : https://www.infowester.com/tagsdesconhecidas2.php

function Table() {
  const { data, filters: { filterByName: { name } } } = useContext(Context);
  const tableHeading = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population',
    'films',
    'created',
    'edited',
    'url',
  ];

  const filterByName = () => {
    if (name) {
      return data.filter(
        (planet) => planet.name.toUpperCase().includes(name.toUpperCase()),
      );
    }
    return data;
  };

  // Para terminar essa parte consultei o repositório da colega Paula Carlos
  const showTable = (planets) => (
    <div>
      <table>
        <tbody>
          <tr>
            {tableHeading.map((header) => (
              <th key={ header }>{header}</th>
            ))}
          </tr>
          {planets.map(
            ({
              name: planetName,
              rotation_period: rotationPeriod,
              orbital_period: orbitalPeriod,
              diameter,
              climate,
              gravity,
              terrain,
              surface_water: surfaceWater,
              population,
              films,
              created,
              edited,
              url,
            }) => (
              <tr key={ planetName }>
                <td>{planetName}</td>
                <td>{rotationPeriod}</td>
                <td>{orbitalPeriod}</td>
                <td>{diameter}</td>
                <td>{climate}</td>
                <td>{gravity}</td>
                <td>{terrain}</td>
                <td>{surfaceWater}</td>
                <td>{population}</td>
                <td>{films}</td>
                <td>{created}</td>
                <td>{edited}</td>
                <td>{url}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
  return showTable(filterByName());
}
export default Table;
