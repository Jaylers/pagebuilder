import React from 'react';
import logo from './asset/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>React Sample</title>
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Welcome to React
        </p>
        <a
          className="App-link"
          href="http://jaylers.com"
          target="_blank"
          rel="noopener noreferrer">
          Home
        </a>
      </header>
    </div>
  );
}

export default App;
