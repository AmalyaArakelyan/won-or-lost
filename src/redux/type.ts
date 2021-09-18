export type GUESS = {
  city: CITY;
  guess: number;
  real: number;
  type: boolean;
};
export type CITY = {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: {
    lon: number;
    lat: number;
  };
};

export type citiesType = CITY[];

export type GUESS_REDUCER = {
  currentCity?: CITY;
  currentGuess?: number;
  guessing: GUESS[];
  lost: number;
  showResult: boolean;
};

export type ACTION = {
  type: string;
  payload?: any;
};

export type STORE = {
  guess: GUESS_REDUCER;
};
export type DISPATCH = (args: ACTION) => ACTION;
