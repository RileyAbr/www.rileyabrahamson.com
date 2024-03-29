import React, { Component } from "react";

import "./styles.scss";

import HomeButton from "../HomeButton";

class HomeSocialButton extends Component {
    render() {
        return (
            <HomeButton
                altText={this.props.altText}
                parentCallback={this.props.parentCallback}
                faceDirect={this.props.faceDirect}
            >
                <a
                    className="home-nav-button"
                    href={this.props.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="home-nav-icon"
                        src={this.props.imgSrc}
                        alt={this.props.altText}
                    ></img>
                </a>
            </HomeButton>
        );
    }
}

export default HomeSocialButton;
