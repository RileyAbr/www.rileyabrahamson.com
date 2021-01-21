import React from 'react';

import './styles.scss';

import PortfolioProject from './PortfolioProject';
import projectData from './projects.json';

const projectList = [...projectData].reverse().map((element) => {
    return (
        <PortfolioProject
            {...element}
        />
    );
})

function Portfolio() {
    return (
        <div className="page-content">
            <article className="portfolio-column">
                {projectList}
            </article>
        </div>
    );
}

export default Portfolio;
