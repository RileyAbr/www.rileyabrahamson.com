import React from 'react';
import ReactMarkdown from 'react-markdown';

import './styles.scss';

class BlogPage extends React.Component {
    render() {
        return (
            <div style={{ padding: "200px 0" }}>
                Test Post
                {this.props.match.params[0]}
                <ReactMarkdown source={process.env.PUBLIC_URL + `blogs/${this.props.match.params[0]}`}></ReactMarkdown>
            </div>
        );
    }
}

export default BlogPage;
