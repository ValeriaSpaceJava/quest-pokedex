import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';


const Home = () => {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const { toggleTheme } = useContext(ThemeContext);
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchPokemons = async () => {
    setLoading(true);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
    const data = await res.json();

    const pokemonDetails = await Promise.all(
      data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        return await res.json();
      })
    );

    setPokemons((prev) => {
      const existingsId = new Set(prev.map(p => p.id))
      const newUnique = pokemonDetails.filter(p => !existingsId.has(p.id))
      return [...prev, ...newUnique]

    });
    setOffset((prev) => prev + 10);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemons();
    fetchTypes();
  }, []);

  const fetchTypes = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/type');
  const data = await res.json();
  setTypes(data.results);
};

return (
  
  <div style={{ padding: '2rem' }}>
    <button onClick={toggleTheme} style={{ marginBotton: '1rem', padding: '0,5rem 1rem' }}>Alternar Tema</button>

    <h1>Pokédex</h1>
    <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="type">Filtrar por tipo: </label>
        <select
          id="type"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          style={{ padding: '0.5rem', marginLeft: '0.5rem' }}
        >
          <option value="">Todos</option>
          {types.map((type) => (
            <option key={type.name} value={type.name}>{type.name}</option>
          ))}
        </select>
      </div>

    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {pokemons
        .filter(pokemon => selectedType === '' || pokemon.types.some(t => t.type.name === selectedType))
        .map((pokemon) => (
        <Link
          key={pokemon.id}
          to={`/pokemon/${pokemon.name}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div
            style={{
              border: '1px solid gray',
              borderRadius: '8px',
              padding: '1rem',
              width: '150px',
              textAlign: 'center'
            }}
          >
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h3>{pokemon.name}</h3>
          </div>
        </Link>
      ))}
    </div>
    <button onClick={fetchPokemons} disabled={loading} style={{ marginTop: '2rem', padding: '0.5rem 1rem' }}>
      {loading ? 'Carregando...' : 'Carregar mais'}
    </button>
  </div>
  );
};

export default Home;
