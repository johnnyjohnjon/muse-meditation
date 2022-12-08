import React, {useState, useEffect} from 'react';
import Header from '../Components/Header'
import Figure from '../Components/Figure'
import WrongLetters from '../Components/WrongLetters'
import Word from '../Components/Word'
import Popup from '../Components/Popup'

import '../Products.css';

const words = ["wizard", "depression", "irony", "cold", "pain"];
let selectedWord = words[Math.floor(Math.random() * words.length)];

let playable = true;

function Products() {
  const [playable, setPlayable] = useState(true);
  const [ correctLetters, setCorrectLetters] = useState([]);
  const [ wrongLetters, setwrongLetters] = useState([]);

  useEffect(() => {
    const handleKeydown = event => {
      const {key, keyCode} = event;
        if (playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
        
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setCorrectLetters(currentLetters => [...currentLetters, letter]);
            }
          } else {
            if (!wrongLetters.includes(letter)) {
              setwrongLetters(wrongLetters => [...wrongLetters, letter]);
            }
          }
        }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);

    setCorrectLetters([]);
    setwrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];

  }

  return (
    <>
      <Header/>
      <div className='game-container'>
        <Figure wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
    </>
  );
}

export default Products;
