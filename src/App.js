import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header.js';
import Timeset from './components/Timeset.js';
import Timer from './components/Timer.js';

function App() {
  return (
    <div className="app-wrapper">
        <Header />
        <Timeset />
        <Timer />
    </div>
  );
}

export default App;
