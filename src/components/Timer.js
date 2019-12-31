import React from 'react';

class Timer extends React.Component {
  handleStart() {
    alert('Coming Soon!');
  }
  render() {
    return (
      <div className="timer-container">
        <label htmlFor="business">TIME TO FAST</label>
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

export default Timer;