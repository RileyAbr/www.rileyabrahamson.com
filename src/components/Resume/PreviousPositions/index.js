import React from "react";
import PreviousPosition from "./PreviousPosition";
import "./styles.scss";

const PreviousPositions = ({ pastPositions }) => {
    return (
        <div className="resume-previous-positions">
            <h2 className="resume-previous-positions-title">
                Where I've Previously Worked
            </h2>
            <div aria-hidden="true" className="resume-previous-postions-hr" />
            <div className="resume-previous-positions-wrapper">
                {pastPositions.map((position) => {
                    return <PreviousPosition {...position} />;
                })}
            </div>
        </div>
    );
};

export default PreviousPositions;
