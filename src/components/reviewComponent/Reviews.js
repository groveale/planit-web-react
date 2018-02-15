import React, { Component } from 'react';
import './reviews.css';
import ReviewItem from './ReviewItem';
import left from './reviewSVGs/left.svg';
import right from './reviewSVGs/right.svg';
import circle from './reviewSVGs/circle.svg';

class Reviews extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews :[
                {
                    id: 0,
                    reviewComment: "The best app ever!",
                    reviewAuthor: "Alex Grover",
                    reviewYear: 2017,
                },
                {
                    id: 1,
                    reviewComment: "by far the best app I have ever used ever in my life ever. for realz.",
                    reviewAuthor: "All of our friends",
                    reviewYear: 2018,
                },
                {
                    id: 2,
                    reviewComment: "60 percent of the time, it works everytime",
                    reviewAuthor: "Al Grove",
                    reviewYear: 2018,
                }
                
            ],
        
            selectedIndex: 1
        }
        this.decrementReviewIndex = this.decrementReviewIndex.bind(this)
        this.incrementReviewIndex = this.incrementReviewIndex.bind(this)
        this.eachReview = this.eachReview.bind(this)
        
    }
    decrementReviewIndex(){
        if (this.state.selectedIndex > 0)
        {
            this.setState({
                selectedIndex: this.state.selectedIndex - 1
            })
        }
    }

    incrementReviewIndex(){
        if (this.state.selectedIndex < this.state.reviews.length - 1)
        {
            this.setState({
                selectedIndex: this.state.selectedIndex + 1
            })
        }
    }

    

    eachReview(review, i) {
        if (i === this.state.selectedIndex) {
            return <img class="reviewCounter active" src={circle} />
        }
        else {
            return <img class="reviewCounter" src={circle} />
        }
    }

    render() {
    return (
        <section class="reviews">
            <div class="content-wrap">
                <h1> reviews </h1>
                <ReviewItem review={this.state.reviews[this.state.selectedIndex]} />
                <span class="reviewControl">
                    <img onClick={this.decrementReviewIndex} class="changeReview" src={left} alt="previous review" />
                        {this.state.reviews.map(this.eachReview)}
                    <img onClick={this.incrementReviewIndex} class="changeReview" src={right} alt="next review" />
                </span>
            </div> 
        </section>
        )
    }
}

export default Reviews;