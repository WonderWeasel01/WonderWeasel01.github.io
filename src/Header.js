import React from 'react';
import { ReactComponent as MySVG } from './LogoSolo.svg';

function Header() {
  return (
    <header className="App-header">
      <MySVG/>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </header>
  );
}

export default Header;