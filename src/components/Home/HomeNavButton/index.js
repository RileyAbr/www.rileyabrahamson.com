import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

import HomeButton from "../HomeButton";

class HomeNavButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HomeButton
                altText={this.props.altText}
                parentCallback={this.props.parentCallback}
                faceDirect={this.props.faceDirect}
            >
                <NavLink
                    className="home-nav-button"
                    to={"/" + this.props.linkTo}
                >
                    <img
                        className="home-nav-icon"
                        src={this.props.imgSrc}
                        alt={this.props.altText}
                    />
                </NavLink>
            </HomeButton>
        )
    }
}

export default HomeNavButton;
