import React from 'react';
import {
    Route,
    HashRouter
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
import Contact from './components/Contact';

// RA Logo Import
import logo from './logo/ra_logo.png';
import logoSelected from './logo/ra_logo_select.png';

function App() {
    return (
        <HashRouter>
            <NavHeader></NavHeader>

            <main>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/resume" component={Resume} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
            </main>
        </HashRouter>
    );
}

export default App;
