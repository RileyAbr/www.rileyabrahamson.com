import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

// import HomeNavButton from './HomeNavButton';

// Social Images
import github_logo from '../../img/social/github.png';
import linkedin_logo from '../../img/social/linkedin.png';
import twitter_logo from '../../img/social/twitter.png';

// There is probably a cleaner way of doing this, but Webpack specifically is for staticlly choosing the files you want to use... so this solution will do for now :)
import face0 from '../../img/faces/face-0.png';
import face1 from '../../img/faces/face-1.png';
import face2 from '../../img/faces/face-2.png';
import face3 from '../../img/faces/face-3.png';
import face4 from '../../img/faces/face-4.png';
import face5 from '../../img/faces/face-5.png';
import face6 from '../../img/faces/face-6.png';
import face7 from '../../img/faces/face-7.png';
import face8 from '../../img/faces/face-8.png';

// An array holding all of our different faces, from top-left to bottom-right
const faces = [
    face0,
    face1,
    face2,
    face3,
    face4,
    face5,
    face6,
    face7,
    face8
]

function HomeNavButton(props) {
    return (
        <div className="home-nav-wrapper">
            <NavLink className="home-nav-button"
                to={"/" + props.value}
                onMouseOver={props.onMouseOver}
            >{props.value}</NavLink>
        </div>
    )
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faceNumber: 4
        };
    }

    renderHomeNavButton(toPage) {
        return (
            <HomeNavButton
                value={toPage}
            ></HomeNavButton>
        )
    }

    handleMouseEnter(i) {
        this.setState({ faceNumber: i });
    }

    render() {
        return (
            <div className="home-nav">
                <div className="home-nav-grid">
                    {/* First row */}
                    {this.renderHomeNavButton("about")}
                    {this.renderHomeNavButton("resume")}
                    {this.renderHomeNavButton("portfolio")}

                    {/* Second Row */}
                    {this.renderHomeNavButton("blog")}
                    <div className="home-nav-wrapper">
                        <div className="home-nav-button">
                            <img id="home-rileys-face" src={faces[this.state.faceNumber]} alt="An icon of riley's face"></img>
                        </div>
                    </div>
                    {this.renderHomeNavButton("contact")}

                    {/* External Social Links! */}
                    <div className="home-nav-wrapper">
                        <a className="home-nav-button"
                            href="https://github.com/RileyAbr"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="home-nav-icon" src={github_logo} alt="GitHub's Logo"></img>
                        </a>
                    </div>
                    <div className="home-nav-wrapper">
                        <a className="home-nav-button"
                            href="https://www.linkedin.com/in/rlyabr/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="home-nav-icon" src={linkedin_logo} alt="LinkedIn's Logo"></img>
                        </a>
                    </div>
                    <div className="home-nav-wrapper">
                        <a className="home-nav-button"
                            href="https://twitter.com/RileyAbrahamson"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="home-nav-icon" src={twitter_logo} alt="Twitter's Logo"></img>
                        </a>
                    </div>
                </div >
            </div>
        );
    }
}

export default Home;
