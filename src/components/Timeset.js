import React from 'react';

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

export default Timeset;
