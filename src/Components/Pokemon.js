import { useState, useEffect } from 'react';
import '../CSS/Pokemon.css';

export default function Pokemon({
  currentScore,
  setCurrentScore,
  highScore,
  setHighScore,
  randomPokemon,
  setPokemonList,
  pokemonList,
  selectedPokemon,
  setSelectedPokemon,
}) {
  const [pokemonName, setPokemonName] = useState();

  useEffect(() => {
    async function PokeAPIFetch() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomPokemon}`
      );
      const pokeAPI = await response.json();
      return pokeAPI;
    }
    PokeAPIFetch().then((pokemon) => {
      setPokemonName(pokemon.name.toUpperCase());
    });
  }, [randomPokemon]);

  function newPokemonList() {
    setPokemonList(() => {
      let randomPokemonList = [];
      for (let i = 0; i < 9; i++) {
        randomPokemonList.push(Math.floor(Math.random() * 500) + 1);
      }

      return randomPokemonList;
    });
  }

  function handleClick() {
    if (!selectedPokemon.includes(randomPokemon)) {
      setSelectedPokemon([...selectedPokemon, randomPokemon]);
      setCurrentScore(currentScore + 1);

      let shuffledPokemonList = pokemonList
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
      setPokemonList(shuffledPokemonList);

      if (currentScore === 8 || currentScore === 17 || currentScore === 26) {
        setSelectedPokemon([]);
        newPokemonList();
      }
    } else {
      if (currentScore > highScore) setHighScore(currentScore);
      setSelectedPokemon([]);
      setCurrentScore(0);
      newPokemonList();
    }
  }

  return (
    <div className="pokemon--box text-shadow-drop-cente" onClick={handleClick}>
      <img
        className="pokemon-image fade-in"
        alt={randomPokemon}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomPokemon}.png`}
      />
      <p className="pokemon-name">{pokemonName}</p>
    </div>
  );
}
