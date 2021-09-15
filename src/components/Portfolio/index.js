import React, { useEffect, useState } from "react";
import { getProjects } from "../../api/projects.api";
import PortfolioProject from "./PortfolioProject";
import "./styles.scss";

function Portfolio() {
    const [portfolioProjects, setPortfolioProjects] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    const loadProjects = async () => {
        const data = await getProjects();

        setPortfolioProjects(data);

        setIsLoaded(true);
    };

    useEffect(() => {
        if (!isLoaded) {
            loadProjects();
        }
    }, [isLoaded]);

    return (
        <div className="page-content">
            <article className="portfolio-column">
                {isLoaded ? (
                    portfolioProjects.map((project) => (
                        <PortfolioProject {...project} key={project.title} />
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </article>
        </div>
    );
}

export default Portfolio;
