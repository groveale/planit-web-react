import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import planit from '../footerComponent/shareImg/planit.svg';
import './navBar.css';

class NavBar extends Component {
  render() {
    return (
      <header>
        <ul className="navbar" id="headerButtons">
          <div className="navButtonLeft">
            <li><img src={planit} alt="planit" /></li>
            <li><Link id="planitText" to="">planit social</Link></li>
          </div>
          <li className="navButton"><Link id="downloadButton" to="">download</Link></li>
          <li className="navButton"><Link to="/blog">blog</Link></li>
          <li className="navButton"><Link to="/about">about</Link></li>
          <li className="navButton"><Link to="/features">features</Link></li>
        </ul>
      </header>
    )
  }
}
export default NavBar;