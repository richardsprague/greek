import React, { FC } from 'react';
import Flashcard from './Flashcard';
import alphabetData from '../data/greekAlphabet.json';

const FlashcardContainer: FC = () => {
  return (
    <div className="flashcard-container flex flex-wrap justify-center items-center h-screen bg-gray-100">
      {alphabetData.map((card, index) => (
        <Flashcard key={index} greek={card.greek} english={card.english} />
      ))}
    </div>
  );
};

export default FlashcardContainer;
