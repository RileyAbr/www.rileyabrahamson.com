import React from "react";

import "./styles.scss";

function About() {
    return (
        <div className="page-content">
            <section className="about-column">
                <h1 className="about-title">Hello There!</h1>
                <p className="about-bio">
                    I'm Riley Abrahamson, a web developer and current student at
                    North Dakota State University. I'm studying a combination of
                    computer science, web design, and strategic
                    communcations--as well as a handful of German! I aspire to
                    work in the games industry in the future and spend my free
                    time running NDSU's League of Legends Club as an officer for
                    the third year in a row. I'm passionate about being an
                    inclusivity in games and software development; I'm always
                    eager to learn anything ally or{" "}
                    <a id="about-a11y" href="https://a11yproject.com/">
                        A11Y
                    </a>
                    .
                </p>
                <br />
                <p className="about-bio">
                    Lastly, I'm a huge ice cream snob and won't hesitate to let
                    you know my opinion on your sweet, frozen treat of choice.
                    <span role="img" aria-label="An ice cream sundae emoji">
                        🍨
                    </span>
                </p>
            </section>
        </div>
    );
}

export default About;
