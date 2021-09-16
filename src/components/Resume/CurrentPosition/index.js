import React from "react";
import "./styles.scss";

const CurrentPosition = ({ title, metadata }) => {
    return (
        <div className="resume-position">
            <h1 className="resume-position-title">I'm Currently Working At</h1>
            <div aria-hidden="true" className="resume-postion-hr" />
            <a
                className="resume-position-link"
                href={metadata.external_link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    className="resume-position-image"
                    src={metadata.thumbnail.url}
                    alt={metadata.alt_text}
                />
            </a>
        </div>
    );
};

export default CurrentPosition;
