import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

class BlogPost extends React.Component {
    render() {
        return (
            <div className="blog-post-wrapper">
                <NavLink className="blog-post-link" to={`blog/${this.props.urlTitle}`}>
                    <img className="blog-post-thumbnail" src={this.props.mediaPath} />
                </NavLink>
                <NavLink className="blog-post-link" to={`blog/${this.props.urlTitle}`}>
                    <h1 className="blog-post-title">{this.props.title}</h1>
                    <p>{this.props.tagline}</p>
                </NavLink>
                <NavLink className="blog-post-link" to={`blog/${this.props.urlTitle}`}>

                </NavLink>
            </div>
        );
    }
}

export default BlogPost;
