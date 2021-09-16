import React from "react";
import "./styles.scss";

const PreviousPosition = ({ title, metadata }) => {
    return (
        <div className="resume-previous">
            <a
                className="resume-previous-link"
                href={metadata.external_link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    className="resume-previous-image"
                    src={metadata.thumbnail.url}
                    alt={metadata.alt_text}
                />
            </a>
        </div>
    );
};

export default PreviousPosition;
