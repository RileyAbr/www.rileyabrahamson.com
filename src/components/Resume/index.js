import React from 'react';
import SkillsGraph from './SkillsGraph';

import CurrentPosition from './CurrentPosition';

import "./styles.scss";

function Resume() {
    return (
        <div className="page-content">
            <article className="resume-column">
                {/* JSON Resume Download */}

                {/* Positions Info */}
                <div className="resume-positions-container">
                    <CurrentPosition
                        title={"I'm Currently Studying At"}
                        imgSrc={"https://via.placeholder.com/450x300"}
                        altText={"Test"}
                        imgLink={"https://www.rileyabrahamson.com"}
                    />
                    <CurrentPosition
                        title={"I'm Currently Studying At"}
                        imgSrc={"https://via.placeholder.com/450x300"}
                        altText={"Test"}
                        imgLink={"https://www.rileyabrahamson.com"}
                    />
                    <CurrentPosition
                        title={"I'm Currently Studying At"}
                        imgSrc={"https://via.placeholder.com/450x300"}
                        altText={"Test"}
                        imgLink={"https://www.rileyabrahamson.com"}
                    />
                    {/* <div className="resume-position">
                        I'm Currently Studying At
                        <img className="resume-position-image" src="https://via.placeholder.com/450x300" />
                    </div>
                    <div className="resume-position">
                        I'm Currently Working At
                    </div>
                    <div className="resume-position">
                        I'm Currently President Of
                    </div>
                    <div className="resume-position">
                        Other Places I've Worked
                    </div> */}
                </div>

                {/* Previous Work Positions */}
                <div className="resume-previous-positions">
                    <h2>I've Previously Worked At</h2>
                </div>

                {/* Skills Graph */}
                <div className="resume-skills-graph">
                    <SkillsGraph></SkillsGraph>
                </div>
            </article>
        </div>
    );
}

export default Resume;
