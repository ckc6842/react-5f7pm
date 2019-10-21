import React from 'react';
import Tooltip from './Component/Tooltip/Tooltip';

import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App" style={{padding: 30}}>
        <h1>Tooltip Sample</h1>
        <div>
          간단한 문장이 있다고 가정하면, &nbsp;
          <Tooltip 
            text="Just tooltip!!!"
            supportMouseEvent="true"
            supportClickEvent="false"
            vAlign="bottom"
          >주제어</Tooltip>
          를 잘 작성해야 합니다.
        </div>
    </div>
  );
}

export default App;
