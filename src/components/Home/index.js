import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

// There is probably a cleaner way of doing this, but Webpack specifically is for staticlly choosing the files you want to use... so this solution will do for now :)
import face0 from '../../img/faces/face-0.png';
import face1 from '../../img/faces/face-1.png';
import face2 from '../../img/faces/face-2.png';
import face3 from '../../img/faces/face-3.png';
import face4 from '../../img/faces/face-4.png';
import face5 from '../../img/faces/face-5.png';
import face6 from '../../img/faces/face-6.png';
import face7 from '../../img/faces/face-7.png';
import face8 from '../../img/faces/face-8.png';

const faces = [
    face0,
    face1,
    face2,
    face3,
    face4,
    face5,
    face6,
    face7,
    face8
]

function Home() {
    return (
        <div className="home-nav">
            <div className="home-nav-grid">
                <NavLink className="home-nav-button" to="/about">About</NavLink>
                <NavLink className="home-nav-button" to="/">Home</NavLink>
                <NavLink className="home-nav-button" to="/">Home</NavLink>

                <NavLink className="home-nav-button" to="/">Home</NavLink>
                <div className="home-nav-button">
                    <img id="home-rileys-face" src={faces[4]} alt="An icon of riley's face"></img>
                </div>
                <NavLink className="home-nav-button" to="/">Home</NavLink>

                <NavLink className="home-nav-button" to="/">Home</NavLink>
                <NavLink className="home-nav-button" to="/">Home</NavLink>
                <NavLink className="home-nav-button" to="/">Home</NavLink>
            </div>
        </div>
    );
}

export default Home;
