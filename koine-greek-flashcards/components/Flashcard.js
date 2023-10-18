import { useState } from "react";
import styles from './Flashcard.module.css'; // Assuming you're using CSS Modules

const Flashcard = ({ greek, english }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`${styles.card} ${flipped ? styles.flipped : ''}`} onClick={handleFlip}>
      <div className={styles.front}>
        {greek}
      </div>
      <div className={styles.back}>
        {english}
      </div>
    </div>
  );
};

export default Flashcard;
