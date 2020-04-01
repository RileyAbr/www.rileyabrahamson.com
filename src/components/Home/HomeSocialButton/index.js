import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

class HomeSocialButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-nav-wrapper">
                <a className="home-nav-button"
                    href={this.props.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img className="home-nav-icon" src={this.props.imgSrc} alt={this.props.altText}></img>
                </a>
                <h1 className="home-nav-title">{this.props.altText}</h1>
            </div>
        )
    }
}

export default HomeSocialButton;
