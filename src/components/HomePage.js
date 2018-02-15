import React, { Component } from 'react';
import logo from './logo.svg';
import './homePage.css';
import Reviews from './reviewComponent/Reviews';
import Vision from './visionComponent/Vision';
import WhyPlanit from './whyPlanitComponent/WhyPlanit';
import Transform from './transformComponent/Transform'

class HomePage extends Component {
  render() {
    return (
      <div>
        <Transform />
        <WhyPlanit />
        <Vision />
        <Reviews />
      </div>
    )
  }
}
export default HomePage;