import Flashcard from '../components/Flashcard';

const cards = [
  { greek: 'α', english: 'alpha' },
  { greek: 'β', english: 'beta' },
  // ...more cards
];

export default function Home() {
  return (
    <div>
      {cards.map((card, index) => <Flashcard key={index} greek={card.greek} english={card.english} />)}
    </div>
  )
}
