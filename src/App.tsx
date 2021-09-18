import React from 'react';

import Guessing from './components/Guessing';
import ShowResult from './components/ShowResult';
import GuessResult from './components/GuessResult';
import './App.css';
import { useSelector } from 'react-redux';
import { selectShowResult } from './redux/guessing/Selector';

function App() {
  const showResult = useSelector(selectShowResult);
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo" />
        {showResult ? <ShowResult /> : <Guessing />}
        <GuessResult />
      </header>
    </div>
  );
}

export default App;
