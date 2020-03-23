import React from 'react';

import "./styles.scss";

import CurrentPosition from './CurrentPosition';
import PreviousPositions from './PreviousPositions';
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
});

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
                <PreviousPositions />

                {/* Skills Graph */}
                <div className="resume-skills-graph">
                    <SkillsGraph></SkillsGraph>
                </div>
            </article>
        </div>
    );
}

export default Resume;
