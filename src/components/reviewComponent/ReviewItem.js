import React, { Component } from 'react';

class ReviewItem extends Component {
  render() {
    return (
            <div class="reviewItem">
                <p>{this.props.review.reviewComment}</p>
                <p class="commentAuthor">{this.props.review.reviewAuthor} - {this.props.review.reviewYear}</p>
            </div> 
    )
  }
}
export default ReviewItem;