import React, { useEffect } from 'react';

import { selectCurrentCity, selectCurrentGuess } from '../redux/guessing/Selector';
import { checkGuessing, setGuess, setCurrentCity } from '../redux/guessing/GuessActions';
import styles from './Guesting.module.css';
import { useDispatch, useSelector } from 'react-redux';
import getRandomCity from '../utils/getRundomCity';
export function Guessing() {
  const currentCity = useSelector(selectCurrentCity);
  const currentGuess = useSelector(selectCurrentGuess);
  const dispatch = useDispatch();

  const changeCurrentCity = () => {
    dispatch(setCurrentCity(getRandomCity()));
  };

  useEffect(changeCurrentCity, [dispatch]);
  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>{currentCity?.name}</span>
      </div>
      <div>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={currentGuess}
          onChange={e => dispatch(setGuess(e.target.value))}
        />
        <button className={styles.asyncButton} onClick={() => dispatch(checkGuessing())}>
          Check
        </button>
      </div>
    </div>
  );
}
