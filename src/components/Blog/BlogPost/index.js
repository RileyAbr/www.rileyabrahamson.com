import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const BlogPost = ({ slug, title, metadata }) => {
    return (
        <section className="blog-post-wrapper">
            <NavLink className="blog-post-thumbnail-link" to={`blog/${slug}`}>
                <img
                    className="blog-post-thumbnail"
                    src={metadata.thumbnail.url}
                    alt={title}
                />
            </NavLink>
            <NavLink className="blog-post-link" to={`blog/${slug}`}>
                <time className="blog-post-date">{metadata.date}</time>
                <h1 className="blog-post-headings blog-post-title">{title}</h1>
                <p className="blog-post-headings blog-post-tagline">
                    {metadata.teaser}
                </p>
            </NavLink>
        </section>
    );
};

export default BlogPost;
