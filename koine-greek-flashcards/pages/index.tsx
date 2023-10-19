import { useState, useEffect } from 'react';
import greekAlphabet from '../data/greekAlphabet.json';

const App = () => {
  const [currentCard, setCurrentCard] = useState(null);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    getRandomCard();
  }, []);

  const getRandomCard = () => {
    setFlipped(false);  // Reset the flip state when a new card is generated

    const randomIndex = Math.floor(Math.random() * greekAlphabet.length);
    const randomCard = greekAlphabet[randomIndex];
    setCurrentCard(randomCard);
  };

  const toggleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="container flex flex-col h-screen bg-gray-100 justify-center items-center">
      <div className="flashcard-container flex flex-wrap justify-center items-center">
        {currentCard && (
          <div onClick={toggleFlip} className="flashcard rounded-lg border-4 border-black bg-beige text-blue-500 flex items-center justify-center h-32 w-32 m-4">
            <div className={flipped ? 'hidden' : 'block'}>{currentCard.greek}</div>
            <div className={flipped ? 'block' : 'hidden'}>{currentCard.english}</div>
          </div>
        )}
      </div>
      <button type="button" onClick={getRandomCard} className="bg-blue-500 text-white p-2 rounded">Next</button>
    </div>
  );
  
};

export default App;
