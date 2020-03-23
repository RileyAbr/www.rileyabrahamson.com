import React from 'react';

import "./styles.scss";

import PreviousPosition from "./PreviousPosition";

import previousPositions from "./previousPositions.json";

const previousPositionsList = [...previousPositions].reverse().map((element) => {
    return (
        <PreviousPosition
            key={element.id}
            imgSrc={element.imgSrc}
            altText={element.altText}
            imgLink={element.imgLink}
        />
    )
});

function PreviousPositions() {
    return (
        <div className="resume-previous-positions">
            <h2 className="resume-previous-positions-title">
                Places I've Previously Worked
            </h2>
            <div aria-hidden='true' className="resume-previous-postions-hr" />
            <div className="resume-previous-positions-wrapper">
                {previousPositionsList}
            </div>
        </div>
    );
}

export default PreviousPositions;