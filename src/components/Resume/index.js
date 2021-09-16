import React, { useEffect, useState } from "react";
import { getPositions } from "../../api/positions.api";
import CurrentPosition from "./CurrentPosition";
import PreviousPositions from "./PreviousPositions";
import "./styles.scss";

const Resume = () => {
    const [resumePositions, setResumePositions] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    const loadProjects = async () => {
        const data = await getPositions();

        setResumePositions(data);

        setIsLoaded(true);
    };

    useEffect(() => {
        if (!isLoaded) {
            loadProjects();
        }
    }, [isLoaded]);

    console.log(resumePositions);

    return (
        <div className="page-content">
            <article className="resume-column">
                {isLoaded && resumePositions ? (
                    <>
                        <div className="resume-positions-container">
                            <CurrentPosition {...resumePositions[0]} />
                        </div>

                        <PreviousPositions
                            pastPositions={resumePositions.slice(1)}
                        />
                    </>
                ) : (
                    <div>Loading...</div>
                )}
            </article>
        </div>
    );
};

export default Resume;
