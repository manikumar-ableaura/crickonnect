import React from 'react';
import './Header.css';
import logo from './img/logo cric.jpg'

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
          <img
            className="dome"
            src={logo}
            alt="unknown!" />
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#My team">My Team </a></li>
                    <li><a href="#Match Booking">Match Booking</a></li>
                    <li><a href="#Tournaments">Tournaments</a></li>
                    <li><a href="#Logiin">Login</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
