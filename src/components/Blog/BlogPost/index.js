import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

class BlogPost extends React.Component {
    render() {
        return (
            <NavLink to={`blog/${this.props.urlTitle}`}>
                <h2>{this.props.title}</h2>
                <p>{this.props.tagline}</p>
            </NavLink>
        );
    }
}

export default BlogPost;
