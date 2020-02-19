import React from 'react';

import './styles.scss';

function PortfolioProject() {
    return (
        <div className="overlay-container">
            <img className="overlay-image align-middle" src={"https://via.placeholder.com/400x250"} />
            <div className="overlay-hover">
                <div className="overlay-description">
                    <p className="overlay-text">
                        <strong>{"Title"}</strong>
                        <br></br>
                        {"previewLine1"}
                        <br></br>
                        {"previewLine2"}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PortfolioProject;
