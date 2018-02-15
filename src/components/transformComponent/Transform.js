import React, { Component } from 'react';
import './transform.css';

class Transform extends Component {
  render() {
    return (
        <section class="transform">
            <div class="content-wrap">
                <h1> the calendar app that will transform your social life</h1>
                <p> plan it social app makes it easy to meet the people you love at times that suit everyone</p>
            
                <div>
                    <h1>try it now</h1>
                </div>

                <p>download for free on the</p>
                <form action="https://www.appstore.com/">
                    <input class="button" type="submit" value="app store" />
              </form>
            </div>
        </section> 
    )
  }
}
export default Transform;