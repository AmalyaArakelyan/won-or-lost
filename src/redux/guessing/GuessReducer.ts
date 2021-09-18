import { GUESSING, CURRENT_GUESS, CURRENT_CITY } from './Types';
import { GuessReducerType, ActionType } from '../type';

const initState = {
  currentCity: undefined,
  currentGuess: undefined,
  guessing: [],
};

const GuessReducer = (state: GuessReducerType = initState, action: ActionType) => {
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
    default:
      return state;
  }
};
export default GuessReducer;
