import Footer from './Components/Footer';
import PokemonSquare from './Components/PokemonSquare';
import Header from './Components/Header';
import Scoreboard from './Components/Scoreboard';
import { useState, useEffect } from 'react';

export default function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    if (localStorage.getItem('highscore'))
      return localStorage.getItem('highscore');
    else return 0;
  });

  useEffect(() => {
    localStorage.setItem('highscore', highScore);
  }, [highScore]);

  return (
    <div>
      <Header />
      <Scoreboard currentScore={currentScore} highScore={highScore} />
      <PokemonSquare
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
      <Footer />
    </div>
  );
}
