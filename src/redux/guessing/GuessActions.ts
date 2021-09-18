import { GUESSING, CURRENT_GUESS, CURRENT_CITY } from './Types';
import { DispatchType, cityType } from '../type';

export const setCurrentCity = (city: cityType) => async (dispatch: DispatchType) => {
  dispatch({
    type: CURRENT_CITY,
    payload: city,
  });
};

export const checkGuessing = () => async (dispatch: DispatchType) => {
  dispatch({
    type: GUESSING,
    payload: true,
  });
};

export const setGuess = (guess: string) => (dispatch: DispatchType) => {
  dispatch({
    type: CURRENT_GUESS,
    payload: guess,
  });
};
