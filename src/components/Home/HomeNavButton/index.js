import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

class HomeNavButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-nav-wrapper">
                <NavLink className="home-nav-button"
                    to={"/" + this.props.linkTo}
                    onMouseOver={this.props.onMouseOver}
                >
                    <img
                        className="home-nav-icon"
                        src={this.props.imgSrc}
                        alt={this.props.linkTo}
                    />
                </NavLink>
            </div>
        )
    }
}

export default HomeNavButton;
