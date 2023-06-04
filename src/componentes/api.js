import React, { useEffect, useState } from 'react';

const PokemonList = () => {
    const [pokemonData, setPokemon] = useState([]);

    useEffect(() => {
        const fetchPokemonData = async () => {
            const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
            const pokemonCount = 20;
            const promises = []

            for (let i=1; i< pokemonCount; i++){
                const url = baseUrl+i
                promises.push(
                    fetch(url)
                    .then(response => response.json())
                    .then (data => ({
                        id: data.id,
                        name: data.name,
                        image: data.sprites.front_default
                    }))
                ) 
            }

            try {
                const results = await Promise.all(promises)
                setPokemon(results)
            } catch (error) {
                console.error("el error es:",error)
            }
        }
        fetchPokemonData()
    }, []);
    return (
        <div>
          <h2>Pokémon List</h2>
          <ul>
            {pokemonData.map(pokemon => (
              <li key={pokemon.id}>
                <img src={pokemon.image} alt={pokemon.name} />
                <span>{pokemon.name}</span>
                <p>{pokemon.id}</p>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default PokemonList;