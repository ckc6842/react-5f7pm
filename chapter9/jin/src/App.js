import React from 'react';
import GlobalNavMenu from './component/menu/GlobalNavMenu'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GlobalNavMenu/>
      </header>
    </div>
  );
}

export default App;
