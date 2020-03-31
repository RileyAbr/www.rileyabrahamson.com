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
                    className="resume-previous-image"
                    src={process.env.PUBLIC_URL + "positions_images/" + props.imgSrc}
                    alt={props.altText}
                />
            </a>
        </div>
    );
}

export default PreviousPosition;