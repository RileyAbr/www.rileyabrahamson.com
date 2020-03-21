import React, { Component } from 'react';

import './styles.scss';

import HomeNavButton from "./HomeNavButton";

// Home Nav Images
import about from "../../img/homenav/about5.png";
import resume from "../../img/homenav/resume5.png";
import portfolio from "../../img/homenav/portfolio3.png"
import blog from "../../img/homenav/blog3.png";
import contact from "../../img/homenav/contact3.png";
import github_logo from '../../img/homenav/github.png';
import linkedin_logo from '../../img/homenav/linkedin2.png';
import twitter_logo from '../../img/homenav/twitter2.png';

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

    renderHomeNavButton(linkToValue, imgSrcValue, altTextValue) {
        return (
            <HomeNavButton
                linkTo={linkToValue}
                imgSrc={imgSrcValue}
                altText={altTextValue}>
            </HomeNavButton>
        )
    }

    render() {
        return (
            <div className="home-nav">
                <section className="home-nav-grid">
                    {/* First row */}
                    {this.renderHomeNavButton("about", about, "About")}
                    {this.renderHomeNavButton("resume", resume, "Resume")}
                    {this.renderHomeNavButton("portfolio", portfolio, "Portfolio")}

                    {/* Second Row */}
                    {this.renderHomeNavButton("blog", blog, "Blog")}
                    <div className="home-nav-wrapper">
                        <div className="home-nav-button home-riley-face-wrapper">
                            <img id="home-riley-face" src={faces[this.state.faceNumber]} alt="An icon of riley's face"></img>
                        </div>
                        <h1 aria-hidden="true" className="home-nav-title">&nbsp;</h1>
                    </div>
                    {this.renderHomeNavButton("contact", contact, "Contact")}

                    {/* External Social Links! */}
                    <div className="home-nav-wrapper">
                        <a className="home-nav-button"
                            href="https://github.com/RileyAbr"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="home-nav-icon" src={github_logo} alt="GitHub's Logo"></img>
                        </a>
                        <h1 className="home-nav-title">GitHub</h1>
                    </div>
                    <div className="home-nav-wrapper">
                        <a className="home-nav-button"
                            href="https://www.linkedin.com/in/rlyabr/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="home-nav-icon" src={linkedin_logo} alt="LinkedIn's Logo"></img>
                        </a>
                        <h1 className="home-nav-title">LinkedIn</h1>
                    </div>
                    <div className="home-nav-wrapper">
                        <a className="home-nav-button"
                            href="https://twitter.com/RileyAbrahamson"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="home-nav-icon" src={twitter_logo} alt="Twitter's Logo"></img>
                        </a>
                        <h1 className="home-nav-title">Twitter</h1>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;
