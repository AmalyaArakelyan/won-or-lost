export type guess = {
  city: string;
  guess: string;
  realValue: string;
  result: string;
};
export type cityType = {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: {
    lon: number;
    lat: number;
  };
};

export type citiesType = cityType[];

export type GuessReducerType = {
  currentCity?: string;
  currentGuess?: string;
  guessing: guess[];
};

export type ActionType = {
  type: string;
  payload: any;
};

export type StoreType = {
  guess: GuessReducerType;
};
export type DispatchType = (args: ActionType) => ActionType;
