import React from 'react';

import './Header.css';
const Header = (props) => {
  return (
    <header className="header">
      <nav className="header__nav container">
        <h2>EC</h2>
      </nav>
      {props.children}
    </header>
  );
};

export default Header;
