import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header-container">
        <h1 className="header-content">Be Fasting</h1>
      </div>
    );
  }
}

export default Header;
