import { createSelector } from 'reselect';

const currentCity = state => state.guess.currentCity;
const currentGuess = state => state.guess.currentGuess;
const guessing = state => state.guess.guessing;
const lost = state => state.guess.lost;
const showResult = state => state.guess.showResult;

export const selectCurrentCity = createSelector(currentCity, currentCity => currentCity);
export const selectCurrentGuess = createSelector(currentGuess, currentGuess => currentGuess);
export const selectGuessing = createSelector(guessing, guessing => guessing);
export const selectLost = createSelector(lost, lost => lost);
export const selectShowResult = createSelector(showResult, showResult => showResult);
