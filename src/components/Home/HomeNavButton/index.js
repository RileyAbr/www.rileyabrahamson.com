import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

class HomeNavButton extends Component {
    constructor(props) {
        super(props);
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
    }

    mouseEnter(e) {
        alert("Enter")
    };

    mouseLeave(e) {
        alert("Leave")
    };

    render() {
        return (
            <div className="home-nav-wrapper" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                <NavLink className="home-nav-button"
                    to={"/" + this.props.linkTo}
                >
                    <img
                        className="home-nav-icon"
                        src={this.props.imgSrc}
                        alt={this.props.altText}
                    />
                </NavLink>
                <h1 className="home-nav-title">{this.props.altText}</h1>
            </div>
        )
    }
}

export default HomeNavButton;
