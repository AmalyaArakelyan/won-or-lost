import { GUESSING, CURRENT_GUESS, CURRENT_CITY, SET_LOST, SHOW_RESULT } from './Types';
import { DISPATCH, CITY } from '../type';
import fetchData from '../../utils/FetchAPI';

export const setCurrentCity = (city: CITY) => async (dispatch: DISPATCH) => {
  dispatch({
    type: CURRENT_CITY,
    payload: city,
  });
};

export const checkGuessing =
  (guess: number, city: CITY) =>
  async (
    dispatch: DISPATCH,
    getStore: () => { (): any; new (): any; guess: { (): any; new (): any; guessing: any } },
  ) => {
    const guessing = getStore().guess.guessing;

    const result = await fetchData(city.id);
    console.log(result);
    const temp = result?.main?.temp;
    const guessObject = {
      city: city,
      guess: guess,
      real: temp,
      type: false,
    };
    debugger;
    if (temp && temp - 5 < guess && guess < temp + 5) {
      guessObject.type = true;
    } else {
      dispatch({
        type: SET_LOST,
      });
    }
    const newGuessing = [...guessing, guessObject];

    if (newGuessing.length === 5) {
      dispatch({
        type: SHOW_RESULT,
        payload: true,
      });
    }
    return dispatch({
      type: GUESSING,
      payload: newGuessing,
    });
  };

export const setGuess = (guess: number) => (dispatch: DISPATCH) => {
  dispatch({
    type: CURRENT_GUESS,
    payload: guess,
  });
};
