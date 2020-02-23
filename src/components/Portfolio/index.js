import React from 'react';

import './styles.scss';

import PortfolioProject from './PortfolioProject';
import projectData from './projects.json';

let projectList = [...projectData].reverse().map((element) => {
    return (
        <div>
            <PortfolioProject
                title={element.title}
                mediaPath={element.mediaPath}
                previewLine1={element.previewLine1}
                previewLine2={element.previewLine2}
                onClick={e => {
                    this.showModal(e)
                }}
            ></PortfolioProject>
        </div>
    );
})

function Portfolio() {
    return (
        <div className="page-content">
            <div className="portfolio-column">
                {projectList}
            </div>
        </div>
    );
}

export default Portfolio;
