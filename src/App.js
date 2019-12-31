import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';

function App() {
  return (
    <div className="app-wrapper">
        <Header />
        <Timeset />
        <Timer />
    </div>
  );
}

class Timeset extends React.Component {
  render() {
    return (
      <div className="timeset-container">
        <img
          className="timeset-img"
          src="https://images.unsplash.com/photo-1418848372148-629424a5ca04?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="set the time"
        />
      </div>
    );
  }
}

class Inspiration extends React.Component {
  renter() {
    return (
      <div className="inspiration-container">
        <img
          className="inspiration-img"
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="don't give up"
        />
      </div>
    );
  }
}

class Timer extends React.Component {
  handleStart() {
    alert('Coming Soon!');
  }
  render() {
    return (
      <div className="timer-container">
        <label for="business">TIME TO FAST</label>
        <select className="timer-select" name="business">
          <option value="select">What is your goal?</option>
          <option value="small">16 Hours</option>
          <option value="medium">24 Hours</option>
          <option value="large">48 Hours</option>
        </select>
        <button
          id="timer-start-btn"
          type="button"
          onClick={this.handleStart}
        >
          Start!
        </button>
      </div>
    );
  }
}

export default App;
