import React, { useState } from 'react';
import Pokemon from './Pokemon';
import '../CSS/Pokemon.css';

export default function PokemonSquare({
  currentScore,
  setCurrentScore,
  highScore,
  setHighScore,
}) {
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [pokemonList, setPokemonList] = useState(() => {
    let randomPokemonList = [];
    for (let i = 0; i < 9; i++) {
      randomPokemonList.push(Math.floor(Math.random() * 500) + 1);
    }

    return randomPokemonList;
  });

  let pokemonComponents = [];
  for (let i = 0; i < pokemonList.length; i++) {
    pokemonComponents.push(
      <Pokemon
        key={i}
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        highScore={highScore}
        setHighScore={setHighScore}
        randomPokemon={pokemonList[i]}
        setPokemonList={setPokemonList}
        pokemonList={pokemonList}
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
    );
  }

  return <div className="pokemon-component--box">{pokemonComponents}</div>;
}
