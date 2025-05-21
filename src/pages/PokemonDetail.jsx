import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const PokemonDetail = () => {
    const {name} = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [abilities, setAbilities] = useState([]);

    useEffect( () => {
        const fetchPokemon = async () => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await res.json();
            setPokemon(data);

            //Fetch abilities descriptions
            const abilitiesData =  await Promise.all(
                data.abilities.map( async (abilityInfo) => {
                    const res = await fetch(abilityInfo.ability.url);
                    const abilityData = await res.json();
                    const englishEntry = abilityData.effect_entries.find( entry => entry.language.name === 'en');
                    return {
                        name: abilityInfo.ability.name,
                        description: englishEntry?.effect || 'No description'
                    }
                })
            )
            setAbilities(abilitiesData);

        }
        fetchPokemon();
    }, [name]

    )

    if (!pokemon) return <p>Carregando...</p>;

    return(
        <div style={{ padding: '2rem'}}>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            <h2>Tipos</h2>
            <ul>
                {pokemon.types.map( t =><li key={t.type.name}>{t.type.name}</li>)}
            </ul>
            <h2>Movimentos</h2>
            <ul>
                {pokemon.moves.slice(0, 10).map( m => <li key={m.move.name}>{m.move.name}</li>)}
            </ul>
            <h2>Habilidades</h2>
            <ul>
                { abilities.map((a) => (
                    <li key={a.name}>
                        <strong>{a.name}:</strong> {a.description}
                    </li>

                ))}
            </ul>
        </div>
    )

}

export default PokemonDetail;
