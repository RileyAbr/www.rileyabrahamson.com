import React, { useEffect, useState } from "react";
import { getBlogs } from "../../api/blogs.api";
import BlogPost from "./BlogPost";
import "./styles.scss";

const Blog = () => {
    const [blogsData, setBlogsData] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    const loadBlogs = async () => {
        const data = await getBlogs();

        setBlogsData(data);

        setIsLoaded(true);
    };

    useEffect(() => {
        if (!isLoaded) {
            loadBlogs();
        }
    }, [isLoaded]);

    return (
        <div className="page-content">
            <article className="blogs-column">
                {isLoaded ? (
                    blogsData.map((blog) => <BlogPost {...blog} />)
                ) : (
                    <div>Loading...</div>
                )}
            </article>
        </div>
    );
};

export default Blog;
