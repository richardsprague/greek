import React, { FC, useState } from 'react';

interface FlashcardProps {
  greek: string;
  english: string;
}

const Flashcard: FC<FlashcardProps> = ({ greek, english }) => {
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped(!flipped);
  };

  return (
    <div onClick={flipCard} className={`flashcard ${flipped ? 'flipped' : ''} rounded-lg border-4 border-black bg-beige text-blue-500 flex items-center justify-center h-32 w-32 m-4`}>
      <div className={`greek ${flipped ? 'hidden' : 'block'}`}>{greek}</div>
      <div className={`english ${flipped ? 'block' : 'hidden'}`}>{english}</div>
    </div>
  );
};

export default Flashcard;
