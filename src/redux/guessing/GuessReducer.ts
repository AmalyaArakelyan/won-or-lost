import { GUESSING, CURRENT_GUESS, CURRENT_CITY, SET_LOST, SHOW_RESULT } from './Types';
import { GUESS_REDUCER, ACTION } from '../type';

const initState = {
  currentCity: undefined,
  currentGuess: 0,
  guessing: [],
  lost: 0,
  showResult: false,
};

const GuessReducer = (state: GUESS_REDUCER = initState, action: ACTION) => {
  switch (action.type) {
    case GUESSING:
      return {
        ...state,
        guessing: action.payload,
      };
    case CURRENT_GUESS:
      return {
        ...state,
        currentGuess: action.payload,
      };
    case CURRENT_CITY:
      return {
        ...state,
        currentCity: action.payload,
      };
    case SET_LOST:
      return {
        ...state,
        lost: state.lost++,
      };
    case SHOW_RESULT:
      return {
        ...state,
        showResult: action.payload,
      };
    default:
      return state;
  }
};
export default GuessReducer;
