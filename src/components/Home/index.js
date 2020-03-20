import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

import HomeNavButton from "./HomeNavButton";

// Home Nav Images
import about from "../../img/homenav/about3.png";
import resume from "../../img/homenav/resume3.png";
import portfolio from "../../img/homenav/portfolio2.png"
import blog from "../../img/homenav/blog2.png";
import contact from "../../img/homenav/contact2.png";
import github_logo from '../../img/homenav/github.png';
import linkedin_logo from '../../img/homenav/linkedin.png';
import twitter_logo from '../../img/homenav/twitter.png';

// There is probably a cleaner way of doing this, but Webpack specifically is for staticly choosing the files you want to use... so this solution will do for now :)
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

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faceNumber: 4
        };
    }

    renderHomeNavButton(linkToValue, imgSrcValue) {
        return (
            <HomeNavButton
                linkTo={linkToValue}
                imgSrc={imgSrcValue}>
            </HomeNavButton>
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
                    {this.renderHomeNavButton("about", about)}
                    {this.renderHomeNavButton("resume", resume)}
                    {this.renderHomeNavButton("portfolio", portfolio)}

                    {/* Second Row */}
                    {this.renderHomeNavButton("blog", blog)}
                    <div className="home-nav-wrapper">
                        <div className="home-nav-button">
                            <img id="home-rileys-face" src={faces[this.state.faceNumber]} alt="An icon of riley's face"></img>
                        </div>
                    </div>
                    {this.renderHomeNavButton("contact", contact)}

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
