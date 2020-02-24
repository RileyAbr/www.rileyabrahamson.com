import React from 'react';

import './styles.scss';

class BlogPage extends React.Component {
    render() {
        return (
            <div style={{ padding: "200px 0" }}>
                Test Post
                {this.props.match.params[0]}
            </div>
        );
    }
}

export default BlogPage;
