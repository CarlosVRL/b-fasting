import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header.js';
import Timeset from './components/Timeset.js';
import Timer from './components/Timer.js';

function App() {
  const sp = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  };
  const s = {
    display: 'flex',
    flexDirection: 'column',
    width: '425px',
    height: '500px',
    justifyContent: 'center'
  };
  return (
    <div style={sp}>
      <div className="app-wrapper" style={s}>
          <Header />
          <Timeset />
          <Timer />
      </div>
    </div>
  );
}

export default App;
