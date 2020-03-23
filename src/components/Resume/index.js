import React from 'react';
import SkillsGraph from './SkillsGraph';

import "./styles.scss";

function Resume() {
    return (
        <div className="page-content">
            <section className="resume-column">
                Resume Page!
                <SkillsGraph></SkillsGraph>
            </section>
        </div>
    );
}

export default Resume;
