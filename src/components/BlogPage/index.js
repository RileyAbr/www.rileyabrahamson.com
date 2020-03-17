import React, { Component } from 'react';
import { useLocation } from "react-router-dom"
import ReactMarkdown, { renderers } from 'react-markdown';

import './styles.scss';

// All possible blogs
// Note: this isn't the cleanest way to do it, but it does ensure that no extraneous blogs will ever be loaded
import blog0 from './blogs/minimum-viable-gaming.md';
import blog1 from './blogs/the-monetization-of-gaming-moments.md';
import blog2 from './blogs/an-8-bit-argument-for-art.md';
import blog3 from './blogs/what-the-golf-and-strokes-of-genius.md';

const urlToBlog = {
    "minimum-viable-gaming": blog0,
    "the-monetization-of-gaming-moments": blog1,
    "an-8-bit-argument-for-art": blog2,
    "what-the-golf-and-strokes-of-genius": blog3
}

class BlogPage extends Component {

    constructor(props) {
        super(props);
        this.state = { markdown: '' };
    }

    currentBlogUrl = this.props.location.pathname.slice(6); //slice off the "/blog/" portion of the url pathname

    componentWillMount() {
        fetch(urlToBlog[this.currentBlogUrl]).then(res => res.text()).then(text => this.setState({ markdown: text }));
    }

    render() {
        const { markdown } = this.state;
        return (
            <div>
                <ReactMarkdown source={markdown} />
            </div>
        )
    }
}

export default BlogPage;
