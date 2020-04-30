import React, { Component } from 'react';
import Review from './Review'
import { connect } from 'react-redux';

class Reviews extends Component {
    render() {
        return <>
            <ul>
                {this.props.reviews ?
                    this.props.reviews.map((review) => {
                        return (<Review key={review.id} review={review}/>)
                    }) : null
                }
            </ul>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
      reviews: state.reviews,
    }
};

const connection = connect(mapStateToProps);
const ConnectedReviews = connection(Reviews);

export default ConnectedReviews;
