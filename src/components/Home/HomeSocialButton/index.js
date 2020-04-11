import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

import HomeButton from "../HomeButton";

class HomeSocialButton extends Component {
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
                <a className="home-nav-button"
                    href={this.props.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img className="home-nav-icon" src={this.props.imgSrc} alt={this.props.altText}></img>
                </a>
            </HomeButton>
        )
    }
}

export default HomeSocialButton;
