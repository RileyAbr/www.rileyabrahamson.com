import React from 'react';
import { NavLink } from 'react-router-dom';

function HomeNavButton(props) {

    return (
        <NavLink className="home-nav-button" to={"/" + props.value}>{props.value}</NavLink>
    )
}

export default HomeNavButton;