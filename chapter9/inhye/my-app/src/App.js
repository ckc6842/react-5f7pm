import React from 'react'
import logo from './logo.svg'
import './App.css'
import Main from './Component/Main'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Main></Main>
        </div>
      </header>
    </div>
  )
}

export default App
