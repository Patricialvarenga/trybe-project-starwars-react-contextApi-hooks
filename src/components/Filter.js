import React, { useEffect, useContext } from 'react';
import Context from '../context/Context';

function Filter() {
  const { setData, filters: { filterByName: { setName } } } = useContext(Context);

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const planets = await fetch(endpoint)
        .then((response) => response.json())
        .then((data) => data.results);
      setData(planets);
    };
    getPlanets();
  }, [setData]);

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  return (
    <form>
      <div>
        <input
          data-testid="name-filter"
          type="text"
          onChange={ handleChange }
        />
      </div>
    </form>
  );
}

export default Filter;
