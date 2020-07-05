import React, { Component } from "react";

import "./styles.scss";

class HomeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faceDirect: this.props.faceDirect,
        };
    }

    sendFaceToParent = () => {
        this.props.parentCallback(this.state.faceDirect);
    };

    sendEmptyToParent = () => {
        this.props.parentCallback(4);
    };

    render() {
        return (
            <div className="home-nav-wrapper">
                <div
                    onMouseEnter={this.sendFaceToParent}
                    onMouseLeave={this.sendEmptyToParent}
                >
                    {this.props.children}
                </div>
                <h1 className="home-nav-title">{this.props.altText}</h1>
            </div>
        );
    }
}

export default HomeButton;
