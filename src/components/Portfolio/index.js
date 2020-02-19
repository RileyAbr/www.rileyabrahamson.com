import React from 'react';

import './styles.scss';

import PortfolioProject from './PortfolioProject';

function Portfolio() {
    return (
        <div className="page-content">
            <div className="portfolio-column">
                <PortfolioProject></PortfolioProject>
                <PortfolioProject></PortfolioProject>
                <PortfolioProject></PortfolioProject>

                <PortfolioProject></PortfolioProject>
                <PortfolioProject></PortfolioProject>
                <PortfolioProject></PortfolioProject>

                <PortfolioProject></PortfolioProject>
                <PortfolioProject></PortfolioProject>
                <PortfolioProject></PortfolioProject>
            </div>
        </div>
    );
}

export default Portfolio;
