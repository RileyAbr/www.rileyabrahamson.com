import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

class BlogPost extends React.Component {
    render() {
        return (
            <div className="blog-post-wrapper">
                <NavLink className="blog-post-thumbnail-link" to={`blog/${this.props.urlTitle}`}>
                    <img className="blog-post-thumbnail" src={process.env.PUBLIC_URL + "blog_thumbs/" + this.props.mediaPath} />
                    {/* <img className="blog-post-thumbnail" src="https://via.placeholder.com/400x300" /> */}

                </NavLink>
                <NavLink className="blog-post-link" to={`blog/${this.props.urlTitle}`}>
                    <span className="blog-post-date">{this.props.date}</span>
                    <h1 className="blog-post-headings blog-post-title">{this.props.title}</h1>
                    <p className="blog-post-headings blog-post-tagline">{this.props.tagline}</p>
                </NavLink>
            </div>
        );
    }
}

export default BlogPost;
