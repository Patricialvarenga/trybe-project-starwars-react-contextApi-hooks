import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

// Melhora lógica do req 1 e 2, e faz req 3, consultando o repositório do colega Ygor Saturnino
function Provider({ children }) {
  const [dados, setDados] = useState([]);
  const [filtro, setFiltro] = useState([]);
  const [name, setName] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valor, setValor] = useState();
  const options = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const options2 = ['maior que', 'menor que', 'igual a'];

  useEffect(() => {
    const getDados = async () => {
      try {
        const resultado = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
          .then((response) => response.json());
        setDados(resultado.results);
        setFiltro(resultado.results);
      } catch (error) {
        console.log(error);
      }
    };
    getDados();
  }, []);

  const filterName = (element) => {
    const { value } = element.target;
    const dadosFiltrados = dados.filter(
      (dado) => dado.name.toLowerCase().includes(value),
    );
    setFiltro(dadosFiltrados);
  };

  const guardaName = (element) => {
    const { value } = element.target;
    setName(value);
  };

  const guardaComparison = (element) => {
    const { value } = element.target;
    setComparison(value);
  };

  const guardaValor = (element) => {
    const { value } = element.target;
    setValor(value);
  };

  // consulta parseFoat :https://pt.stackoverflow.com/questions/10002/como-a-fun%C3%A7%C3%A3o-parsefloat-funciona
  const Filtrar = () => {
    const dadosFiltrados = dados.filter((dado) => {
      switch (comparison) {
      case 'maior que':
        return (dado[name] > parseFloat(valor));
      case 'menor que':
        return (dado[name] < parseFloat(valor));
      case 'igual a':
        return (dado[name] === valor);
      default:
        return ('error');
      }
    });
    setFiltro(dadosFiltrados);
  };

  const contextValue = { dados,
    filtro,
    filterName,
    Filtrar,
    guardaName,
    guardaComparison,
    guardaValor,
    name,
    options,
    options2,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = ({
  children: PropTypes.object,
}).isRequired;

export default Provider;
