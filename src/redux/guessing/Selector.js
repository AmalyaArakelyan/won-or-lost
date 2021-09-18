import { createSelector } from 'reselect';

const currentCity = state => state.guess.currentCity;
const currentGuess = state => state.guess.currentGuess;

export const selectCurrentCity = createSelector(currentCity, currentCity => currentCity);
export const selectCurrentGuess = createSelector(currentGuess, currentGuess => currentGuess);
