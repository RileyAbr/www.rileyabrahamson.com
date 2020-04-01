import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

class HomeNavButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faceDirect: this.props.faceDirect
        }
    }

    sendDataToParent = () => {
        this.props.parentCallback(this.state.faceDirect);
    }

    render() {
        return (
            <div className="home-nav-wrapper"
                // onMouseEnter={() => this.props.onMouseEnter}
                // onMouseLeave={this.props.onMouseLeave}
                onMouseEnter={this.sendDataToParent}
            >
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
