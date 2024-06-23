import React from 'react';
import logo from '../Assets/LogoSolo.svg';
import { Link } from 'react-router-dom';
import '../Css/Header.css';


export const Header = () => {
    return (
        <React.Fragment>
            <div className="container">
                <Link className="link" to="/Projects">
                    <h1 className="heading">Projects</h1>
                </Link>

                <Link className="link" to="/Hire">
                    <h1 className="heading">Hire me </h1>
                </Link>

                <Link className="link" to="/">
                    <img className="logo" src={logo} alt="Logo" />
                </Link>

                <Link className="link" to="/About">
                    <h1 className="heading">About</h1>
                </Link>
                <Link className="link" to="/Contact">
                    <h1 className="heading">Contact</h1>
                </Link>
            </div>
            <style>
                {`
                .container {
                    display: flex;
                    justify-content: center;
                    align-items: baseline;
                    gap: 5rem;
                    padding: 1rem;
                    background-color: #1A1A1A;
                }
                .link {
                    text-decoration: none;
                    color: white;
                }
                .heading {
                    font-size: 1.5rem;
                }
                .logo {
                    width: 64px;
                }
                `}
            </style>
        </React.Fragment>
    );
};
