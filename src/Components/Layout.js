// src/Layout.js
import React from 'react';
import { Link } from 'react-router-dom';

/* Css */
import '../Css/Default.css';

/* Assets */
import logo from '../Assets/LogoSolo.svg';
import { HiChevronDoubleRight } from "react-icons/hi";

function Layout({ children }) {
  return (
    <div className="App">
      <div className="Navbar main-color">
        <div className="Header">
          <a href="/">
            <img className="Logo" src={logo} alt='' />
          </a>
          <ul className="headerLinks">
            <li>
              <Link className="main-text" to="/about">About me</Link>
            </li>
            <li>
            <Link className="main-text" to="/Projects">Projects</Link>
            </li>
            <li>
            <Link className="main-text" to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="Header2">
          <a className="Button main-color2" href="/login">
            <div className="ButtonText">Get Access</div>
            <HiChevronDoubleRight />
          </a>
        </div>
      </div>
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;
