import React from 'react';

import './styles.scss';

class BlogPost extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.tagline}</p>
            </div>
        );
    }
}

export default BlogPost;
