import React from 'react';

import './styles.scss';

import PortfolioProject from './PortfolioProject';
import projectData from './projects.json';

let projectList = [...projectData].reverse().map((element) => {
    return (
        <PortfolioProject
            title={element.title}
            mediaPath={element.mediaPath}
            previewLine1={element.previewLine1}
            previewLine2={element.previewLine2}
            longDesc={element.longDesc}
            techUsed={element.techUsed}
            modalMediaPath={element.modalMediaPath}
            modalMediaIsImage={element.modalMediaIsImage}
            hasExternalLink={element.hasExternalLink}
            externalLink={element.externalLink}
            hasRepo={element.hasRepo}
            repoLink={element.repoLink}
        ></PortfolioProject>
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
