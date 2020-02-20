import React from 'react';

import './styles.scss';

function PortfolioProject(props) {
    return (
        <div className="overlay-container" >
            <img className="overlay-image align-middle"
                //src={this.props.mediaPath} 
                src={process.env.PUBLIC_URL + "portfolio_img/" + props.mediaPath} />
            <div className="overlay-hover">
                <div className="overlay-description">
                    <p className="overlay-text">
                        <strong>{props.title}</strong>
                        <br></br>
                        {props.previewLine1}
                        <br></br>
                        {props.previewLine2}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PortfolioProject;
