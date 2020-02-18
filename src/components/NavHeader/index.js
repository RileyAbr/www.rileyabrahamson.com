import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

// RA Logo Import
import logo from '../../logo/ra_logo.png';
import logoSelected from '../../logo/ra_logo_select.png';

function NavHeader() {
    return (
        <header>
            <NavLink exact to="/" className="logo-container">
                <img src={logoSelected} height="50px" alt="Logo for Riley Abrahamson"></img>
                <span class="header-masthead">Riley Abrahamson</span>
            </NavLink>

            <nav>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/resume">Resume</NavLink></li>
                    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavHeader;
