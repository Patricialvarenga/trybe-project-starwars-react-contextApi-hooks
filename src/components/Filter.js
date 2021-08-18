import React, { useEffect, useContext } from 'react';
import Context from '../context/Context';

function Filter() {
  const { setData } = useContext(Context);

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

  return (
    <h1>Filters</h1>
  );
}

export default Filter;
