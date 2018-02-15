import React, { Component } from 'react';
import './why.css';
import WhyItem from './WhyItem';
import avalibility from './whySVGs/avalibility.svg'
import groups from './whySVGs/groups.svg'
import awards from './whySVGs/awards.svg'

class WhyPlanit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            whyItems :[
                {
                    id: 0,
                    title: "view social availability",
                    text: "use friend view to see the availability of your friends and familiy before you create your plans",
                    img: avalibility,
                },
                {
                    id: 1,
                    title: "set up social groups",
                    text: "create social groups with your friends so you can view a group calendar and make plans on dates you know will suit everyone!",
                    img: groups,
                },
                {
                    id: 2,
                    title: "earn social recognition",
                    text: "receive awards for hanging out with your friends regularly and socially interacting with different groups",
                    img: awards,
                }
                
            ],
            
        }
        this.eachWhy = this.eachWhy.bind(this)
    }

    eachWhy(whyItem, i) {
        return <WhyItem why={this.state.whyItems[i]} />
    }

  render() {
    return (
        <section class="why">
            <div class="content-wrap">
                <h1> why use planit social? </h1>
                
                <span class="whySpan">
                    {this.state.whyItems.map(this.eachWhy)}
                </span>

                <form class="why-container" action="https://www.appstore.com/">
                    <input class="button" type="submit" value="see more features" />
                </form>
            </div>
        </section> 
    )
  }
}
export default WhyPlanit;