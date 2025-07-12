import { useEffect, useState } from "react";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const id = Math.floor(Math.random() * 151) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon({
          name: data.name,
          sprite: data.sprites.front_default,
        });
      });
  }, []);

  return (
    <div>
      <h2>Random Pokémon</h2>
      {pokemon ? (
        <div>
          <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
          <img src={pokemon.sprite} alt={pokemon.name} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
