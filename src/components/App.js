import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import FeaturePage from './FeaturePage';
import BlogPage from './BlogListPage';
import AboutPage from './AboutPage';
import NavBar from './headerComponent/NavBar';
import Footer from './footerComponent/Footer.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="features" exact path="/features" component={FeaturePage} />
          <Route name="about" exact path="/about" component={AboutPage} />
          <Route name="blog" exact path="/blog" component={BlogPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
