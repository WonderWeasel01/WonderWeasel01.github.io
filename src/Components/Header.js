import React, { useEffect } from 'react';
import logo from '../Assets/LogoSolo.svg';
import { Link } from 'react-router-dom';
import '../Css/Header.css';
import jQuery from 'jquery';

export const Header = () => {
    useEffect(() => {
        var body = jQuery(document.body);
        var button = jQuery(".vbp-header-menu-button__svg");
        
        button.click(function () {
            if (body.hasClass("menu-open")) {
                body.removeClass("menu-open");
                return;
            }
            body.addClass("menu-open");
        });
    }, []);

    return (
        <React.Fragment>
            <div className="container">
                <Link className="link logo-link" to="/">
                    <img className="logo" src={logo} alt="Logo" />
                </Link>
                <div className="desktop-links">
                    <Link className="link" to="/About">
                        <h3 className="heading">About</h3>
                    </Link>
                    <Link className="link" to="/Projects">
                        <h3 className="heading">Projects</h3>
                    </Link>
                    <Link className="link" to="/Contact">
                        <h3 className="heading">Contact</h3>
                    </Link>
                    <Link className="link" to="/HireMe">
                        <h3 className="heading">Hire me </h3>
                    </Link>
                </div>
                <svg className="vbp-header-menu-button__svg">
                    <line x1="0" y1="50%" x2="100%" y2="50%" className="top" shape-rendering="crispEdges" />
                    <line x1="0" y1="50%" x2="100%" y2="50%" className="middle" shape-rendering="crispEdges" />
                    <line x1="0" y1="50%" x2="100%" y2="50%" className="bottom" shape-rendering="crispEdges" />
                </svg>
            </div>
            <div className="mobile-menu">
                <Link className="link" to="/Projects">
                    Projects
                </Link>
                <Link className="link" to="/HireMe">
                    Hire me
                </Link>
                <Link className="link" to="/About">
                    About
                </Link>
                <Link className="link" to="/Contact">
                    Contact
                </Link>
            </div>
            <style>
                {`
                    .container {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        
                        background-color: #1A1A1A;
                        width: 100%;
                    }
                    .link {
                        text-decoration: none;
                        color: white;
                        font-size: 1.2rem;
                    }
                    .heading {
                        font-size: 1.5rem;
                    }
                    .logo {
                        width: 64px;
                        padding: 20px;
                    }
                    .desktop-links {
                        display: flex;
                        width: 50%;
                        gap: 5rem;
                    }
                    .mobile-menu {
                        display: none;
                        flex-direction: column;
                        position: absolute;
                        top: 60px;
                        left: 0;
                        right: 0;
                        background-color: #1A1A1A;
                        padding: 1rem;
                    }
                    .vbp-header-menu-button__svg {
                        display: none;
                        width: 30px;
                        height: 30px;
                        cursor: pointer;
                        transform: scaleX(-1);
                        margin-right: 20px;
                    }
                    .vbp-header-menu-button__svg line {
                        stroke: #ffffff;
                        stroke-dasharray: 100%;
                        stroke-dashoffset: 0%;
                        transition: transform 0.3s, stroke-dashoffset .4s;
                        transform-origin: center;
                        stroke-width: 3px;
                    }
                    .vbp-header-menu-button__svg .top {
                        transform: translateY(-35%);
                    }
                    .vbp-header-menu-button__svg .middle {
                        transform: scaleX(1);
                        transition: opacity .3s, transform .3s;
                    }
                    .vbp-header-menu-button__svg .bottom {
                        transform: translateY(33%);
                        stroke-dasharray: 100%;
                        stroke-dashoffset: 9px;
                    }
                    .vbp-header-menu-button__svg:hover .bottom {
                        stroke-dashoffset: 0%;
                    }
                    body.menu-open .vbp-header-menu-button__svg .top {
                        transform: rotate(45deg);
                        stroke-linecap: round;
                    }
                    body.menu-open .vbp-header-menu-button__svg .middle {
                        transform: scaleX(0.1);
                        opacity: 0;
                    }
                    body.menu-open .vbp-header-menu-button__svg line.bottom {
                        transform: rotate(-45deg);
                        stroke-linecap: round;
                    }
                    body.menu-open .mobile-menu {
                        display: flex;
                    }
                    @media (max-width: 768px) {
                        .desktop-links {
                            display: none;
                        }
                        .vbp-header-menu-button__svg {
                            display: block;
                        }
                    }
                `}
            </style>
        </React.Fragment>
    );
};
