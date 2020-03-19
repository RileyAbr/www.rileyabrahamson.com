import React, { Component } from 'react';
import {
    Route,
    BrowserRouter
} from 'react-router-dom';

// Overarching Page Styles
import './App.scss';

// Navigation Bar
import NavHeader from './components/NavHeader';

// 1st Level Pages on Site
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import BlogPage from './components/BlogPage';
import Contact from './components/Contact';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavHeader currentUrlLocation={this.props.location}></NavHeader>

                <main>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route exact path="/blog" component={Blog} />
                    <Route path="/blog/*" component={BlogPage} />
                    <Route path="/contact" component={Contact} />
                </main>
            </BrowserRouter>
        )
    }
}

export default App;
