import React from 'react';

import { selectShowResult } from '../redux/guessing/Selector';
import styles from './ShowResult.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { GUESSING, SHOW_RESULT } from '../redux/guessing/Types';

function ShowResult() {
  const dispatch = useDispatch();
  const lost = useSelector(selectShowResult);

  const won = lost >= 3;

  const handleShow = () => {
    dispatch({
      type: SHOW_RESULT,
      payload: false,
    });
    return dispatch({
      type: GUESSING,
      payload: [],
    });
  };

  return (
    <div className={styles.show_wrap}>
      <div className={won ? styles.won : styles.lost}>
        <h1>{won ? 'You Won' : 'You Lost'}</h1>
        <button className={styles.asyncButton} onClick={handleShow}>
          Try again
        </button>
      </div>
    </div>
  );
}
export default ShowResult;
