import React from 'react';

import { Guessing } from './components/Guessing';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo" />
        <Guessing />
      </header>
    </div>
  );
}

export default App;
