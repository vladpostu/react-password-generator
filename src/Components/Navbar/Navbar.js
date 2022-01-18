import React from 'react';

import './Navbar.css';

const Navbar = () => {
    return (
      <header className="header">
        <div className="navbar-nb">
          <h2 id="title">react-password-generator</h2>
          <a href="https://github.com/vladpostu/react-password-generator" target="blank">Github repository</a>
        </div>
      </header>
    );
};

export default Navbar;