import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import './styles.scss';

// RA Logo Import
import logo from '../../logo/ra_logo.png';
import logoSelected from '../../logo/ra_logo_select.png';

class NavHeader extends Component {

    constructor(props) {
        super(props);
        this.state = { logoIsHome: true } // Defaults to a filled in logo
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

                <nav>
                    <ul>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/resume">Resume</NavLink></li>
                        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(NavHeader);
