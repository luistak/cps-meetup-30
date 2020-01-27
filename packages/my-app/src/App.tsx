import React from 'react';
import logo from './logo.svg';
import './App.css';

import { sum } from '@cps-meetup/lib';

const App: React.FC = () => {
  const a = 10;
  const b = 35;
  const c = 12;

  return (
    <div className="App">
      <header className="App-header">``
        <img src={logo} className="App-logo" alt="logo" />
        <h1> A + B + C = {sum(a, b)} </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
