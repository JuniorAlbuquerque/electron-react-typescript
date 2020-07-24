import React from 'react';
// import logo from '../../logo.svg';

import Jnr from '../../assets/jnr.jpg';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Jnr} className="App-logo" alt="logo" />
        <p>
          Teste img
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
