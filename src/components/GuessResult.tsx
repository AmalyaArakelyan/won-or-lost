import React from 'react';

import { selectGuessing } from '../redux/guessing/Selector';
import styles from './GuessResult.module.css';
import { useSelector } from 'react-redux';
import { GUESS } from '../redux/type';

function GuessResult() {
  const guesses = useSelector(selectGuessing);

  return (
    <div className={styles.result_wrap}>
      {guesses.map((guess: GUESS) => (
        <div key={guess.city.id} className={guess.type ? styles.won : styles.lost}>
          <h2>{guess.city.name}</h2>
          <p className={styles.guess}>{guess.guess}</p>
          <p className={styles.real}>{guess.real}</p>
        </div>
      ))}
    </div>
  );
}
export default GuessResult;
