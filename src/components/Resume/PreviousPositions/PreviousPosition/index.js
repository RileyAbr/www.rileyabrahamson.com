import React from 'react';

import "./styles.scss";

function PreviousPosition(props) {
    return (
        <div className="resume-previous">
            <a
                className="resume-previous-link"
                href={props.imgLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    className="resume-position-image"
                    src={props.imgSrc}
                    alt={props.altText}
                />
            </a>
        </div>
    );
}

export default PreviousPosition;