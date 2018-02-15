import React, { Component } from 'react';


class WhyItem extends Component {
    render() {
        return (
                <div class="whyItem">
                    <img class="whyImage" src={this.props.why.img} />
                    <p class="whyTitle">{this.props.why.title}</p>
                    <p class="whyText">{this.props.why.text}</p>
                </div> 
        )
    }
}
export default WhyItem;