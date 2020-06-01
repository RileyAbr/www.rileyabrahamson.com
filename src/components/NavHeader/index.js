import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import './styles.scss';

// RA Logo Import
import logo from '../../logo/ra_logo.png';
import logoSelected from '../../logo/ra_logo_select.png';

class NavHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logoIsHome: true,
            burgerCollapsed: true
        } // Defaults to a filled in logo
    }

    // Flips the Hamburger menu open or closed
    toggleHamburger = () => {
        this.setState({ burgerCollapsed: !this.state.burgerCollapsed });
    }

    // Detects if the route changes. If the route changed, check if the page is the homepage and change the logo to selected or unselected
    componentDidMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            if (location.pathname !== "/") {
                this.setState({ logoIsHome: false })
            }
            else {
                this.setState({ logoIsHome: true })
            }
        });
    }

    render() {
        return (
            <header>
                <NavLink exact to="/" className="logo-container">
                    <img src={(this.state.logoIsHome) ? logoSelected : logo} height="50px" alt="Logo for Riley Abrahamson"></img>
                    <span className="header-masthead">Riley Abrahamson</span>
                </NavLink>

                <button className="navburger-button" onClick={this.toggleHamburger}>
                    <svg viewBox="0 0 30 30" width="30" height="30">
                        <rect y="3" width="30" height="3" rx="3"></rect>
                        <rect y="13" width="30" height="3" rx="3"></rect>
                        <rect y="24" width="30" height="3" rx="3"></rect>
                    </svg>
                </button>

                <nav className={this.state.burgerCollapsed ? "navburger" : "navburger navburger-visible"}>
                    <ul className="navburger-links">
                        <li><NavLink to="/about" onClick={this.toggleHamburger}>About</NavLink></li>
                        <li><NavLink to="/resume" onClick={this.toggleHamburger}>Resume</NavLink></li>
                        <li><NavLink to="/portfolio" onClick={this.toggleHamburger}>Portfolio</NavLink></li>
                        <li><NavLink to="/blog" onClick={this.toggleHamburger}>Blog</NavLink></li>
                        <li><NavLink to="/contact" onClick={this.toggleHamburger}>Contact</NavLink></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(NavHeader);
