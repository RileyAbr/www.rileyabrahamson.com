import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router";
import { getBlog } from "../../api/blogs.api";
import "./styles.scss";

const BlogPage = () => {
    const [blogData, setBlogData] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    const currentBlogUrlSlug = useLocation().pathname.slice(6);

    const loadBlog = async (blogSlug) => {
        const data = await getBlog(blogSlug);

        setBlogData(data);

        setIsLoaded(true);
    };

    useEffect(() => {
        if (!isLoaded) {
            loadBlog(currentBlogUrlSlug);
        }
    }, [currentBlogUrlSlug, isLoaded]);

    console.log(blogData);

    return (
        <div className="page-content">
            <article className="blog-page-column">
                {isLoaded && blogData && blogData[0] ? (
                    <ReactMarkdown source={blogData[0].metadata.content} />
                ) : (
                    <div>Loading...</div>
                )}
            </article>
        </div>
    );
};

export default BlogPage;
