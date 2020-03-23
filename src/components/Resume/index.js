import React from 'react';

import "./styles.scss";

import CurrentPosition from './CurrentPosition';
import SkillsGraph from './SkillsGraph';

import currentPositions from './currentPositions.json';

const currentPositionsList = [...currentPositions].map((element) => {
    return (
        <CurrentPosition
            key={element.id}
            title={element.title}
            imgSrc={element.imgSrc}
            altText={element.altText}
            imgLink={element.imgLink}
        />
    )
})

function Resume() {
    return (
        <div className="page-content">
            <article className="resume-column">
                {/* JSON Resume Download */}

                {/* Positions Info */}
                <div className="resume-positions-container">
                    {currentPositionsList}
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
