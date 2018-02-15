import React, { Component } from 'react';
import './footer.css';

class WhatsStopping extends Component {
  render() {
    return (
        <div>
            <h1> so what's stopping you </h1>
            <div class="whats-stopping">
              <p> Well…? your answer should be nothing.</p>
              <p> plan it social app is free and always will be, so get yourself over to the app store and try it out! </p>
            
              <form class="bottomBorder" action="https://www.appstore.com/">
                <input class="button" type="submit" value="download now" />
              </form>


            </div>
        </div> 
    )
  }
}
export default WhatsStopping;