import React, { Component } from 'react';

import './styles.scss';

import HomeNavButton from "./HomeNavButton";
import HomeSocialButton from "./HomeSocialButton";

// Home Nav Images
import about from "../../img/homenav/about5.png";
import resume from "../../img/homenav/resume5.png";
import portfolio from "../../img/homenav/portfolio3.png"
import blog from "../../img/homenav/blog3.png";
import contact from "../../img/homenav/contact3.png";
import github_logo from '../../img/homenav/github.png';
import linkedin_logo from '../../img/homenav/linkedin2.png';
import twitter_logo from '../../img/homenav/twitter2.png';

// There is probably a cleaner way of doing this, but Webpack specifically is for statically choosing the files you want to use... so this solution will do for now :)
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

    mouseEnter(e) {
        console.log("Enter " + this.props.altText);
    };

    mouseLeave(e) {
        console.log("Leaving " + this.props.altText);
    };

    passToParent = (childValue) => {
        this.setState({ faceNumber: childValue });
    }

    renderHomeNavButton(faceDirectValue, linkToValue, imgSrcValue, altTextValue) {
        return (
            <HomeNavButton
                faceDirect={faceDirectValue}
                linkTo={linkToValue}
                imgSrc={imgSrcValue}
                altText={altTextValue}
                parentCallback={this.passToParent}
            />
        )
    }

    renderHomeSocialButton(faceDirectValue, externalLinkValue, imgSrcValue, altTextValue) {
        return (
            <HomeSocialButton
                faceDirect={faceDirectValue}
                externalLink={externalLinkValue}
                imgSrc={imgSrcValue}
                altText={altTextValue}
                parentCallback={this.passToParent}
            />
        )
    }

    render() {
        return (
            <div className="home-nav">
                <section className="home-nav-grid">
                    {/* First row */}
                    {this.renderHomeNavButton(0, "about", about, "About")}
                    {this.renderHomeNavButton(1, "resume", resume, "Resume")}
                    {this.renderHomeNavButton(2, "portfolio", portfolio, "Portfolio")}

                    {/* Second Row */}
                    {this.renderHomeNavButton(3, "blog", blog, "Blog")}
                    <div className="home-nav-wrapper">
                        <div className="home-nav-button home-riley-face-wrapper">
                            <img id="home-riley-face" src={faces[this.state.faceNumber]} alt="An icon of riley's face"></img>
                        </div>
                        <h1 aria-hidden="true" className="home-nav-title">&nbsp;</h1>
                    </div>
                    {this.renderHomeNavButton(5, "contact", contact, "Contact")}

                    {/* External Social Links! */}
                    {this.renderHomeSocialButton(6, "https://github.com/RileyAbr", github_logo, "GitHub")}
                    {this.renderHomeSocialButton(7, "https://www.linkedin.com/in/rlyabr/", linkedin_logo, "LinkedIn")}
                    {this.renderHomeSocialButton(8, "https://twitter.com/RileyAbrahamson", twitter_logo, "Twitter")}
                </section>
            </div>
        );
    }
}

export default Home;
