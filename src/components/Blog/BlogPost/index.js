import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

class BlogPost extends React.Component {
    render() {
        return (
            <section className="blog-post-wrapper">
                <NavLink className="blog-post-thumbnail-link" to={`blog/${this.props.urlTitle}`}>
                    <img className="blog-post-thumbnail" src={process.env.PUBLIC_URL + "blog_thumbs/" + this.props.mediaPath} />
                </NavLink>
                <NavLink className="blog-post-link" to={`blog/${this.props.urlTitle}`}>
                    <time className="blog-post-date">{this.props.date}</time>
                    <h1 className="blog-post-headings blog-post-title">{this.props.title}</h1>
                    <p className="blog-post-headings blog-post-tagline">{this.props.tagline}</p>
                </NavLink>
            </section>
        );
    }
}

export default BlogPost;
