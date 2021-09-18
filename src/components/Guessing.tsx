import React, { useEffect } from 'react';

import { selectCurrentCity, selectCurrentGuess } from '../redux/guessing/Selector';
import { checkGuessing, setGuess, setCurrentCity } from '../redux/guessing/GuessActions';
import styles from './Guesting.module.css';
import { useDispatch, useSelector } from 'react-redux';
import getRandomCity from '../utils/getRundomCity';

function Guessing() {
  const currentCity = useSelector(selectCurrentCity);
  const currentGuess = useSelector(selectCurrentGuess);
  const dispatch = useDispatch();

  const changeCurrentCity = () => {
    dispatch(setCurrentCity(getRandomCity()));
  };

  useEffect(changeCurrentCity, [dispatch]);

  const handleSetGuess = (e: { target: { value: string } }) => {
    const value = +e.target.value;
    if (!isNaN(value)) {
      dispatch(setGuess(value));
    }
  };
  const handleChack = () => {
    dispatch(checkGuessing(currentGuess, currentCity));
    changeCurrentCity();
    dispatch(setGuess(0));
  };
  return (
    <div className={styles.wrap}>
      <p className={styles.textbox}>{currentCity?.name}</p>
      <div className={styles.cast}>
        <input
          className={styles.input}
          aria-label="Set increment amount"
          value={currentGuess || ''}
          onChange={handleSetGuess}
        />
        <button className={styles.asyncButton} onClick={handleChack}>
          Check
        </button>
      </div>
    </div>
  );
}
export default Guessing;
