import React from 'react';
import logo from './logo.svg';
import './App.css';
import OneSignal from "react-onesignal";

OneSignal.initialize('2a961f74-76a3-45b0-9ea4-de47a1370932');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
