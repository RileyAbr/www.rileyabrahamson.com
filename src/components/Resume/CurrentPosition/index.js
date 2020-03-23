import React from 'react';

import "./styles.scss";

function CurrentPosition(props) {
    return (
        <div className="resume-position">
            <h1 className="resume-position-title">{props.title}</h1>
            <div className="resume-postion-hr"></div>
            <a
                className="resume-position-link"
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

export default CurrentPosition;
