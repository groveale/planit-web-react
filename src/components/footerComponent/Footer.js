import React, { Component } from 'react';
import './footer.css';
import facebook from './shareImg/facebook.svg';
import twitter from './shareImg/twitter.svg';
import youtube from './shareImg/youtube.svg';
import planit from './shareImg/planit.svg';
import WhatsStopping from './WhatsStopping';



class Footer extends Component {
  render() {
    return (
      <footer>
          <div class="content-wrap">
            <WhatsStopping />


            <div class="footer-nav">
                <a href="#home">terms of service</a>
                <a href="#news">privacy policy</a>
                <a href="#contact">contact us</a>
                <a href="#about">app feedback</a>
                <a href="#about">FAQ's</a>
                <div>
                    <a href="https://facebook.com"> <img src={facebook} alt="like on facebook" /></a>
                    <a href="https://twitter.com"> <img src={twitter} alt="tweet us" /></a>
                    <a href="https://youtube.com"> <img src={youtube} alt="subsribe to us on youtube" /></a>
                </div>
            </div>
        
            
            <div class="copyright center"> 
                <p>© grovaledigital project</p>
                <img src={planit} alt="planit" />    
                <p>made for you in the uk</p>
            </div>
        </div>
      </footer>
    )
  }

}
export default Footer;