import React from 'react';

import './styles.scss';

import BlogPost from './BlogPost';
import blogData from './blogs.json';

const blogList = [...blogData].reverse().map((element) => {
    return (
        <BlogPost
            urlTitle={element.urlTitle}
            title={element.title}
            tagline={element.tagline}
            date={element.date}
            abstract={element.abstract}
            mediaPath={element.mediaPath}
        ></BlogPost>
    );
})

function Blog() {
    return (
        <div className="page-content">
            <article className="blogs-column">
                {blogList}
            </article>
        </div>
    );
}

export default Blog;
