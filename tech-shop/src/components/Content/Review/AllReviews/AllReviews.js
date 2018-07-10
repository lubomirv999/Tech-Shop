import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import requester from '../../../../api/utilities/requester';

import Review from './Review';

import './AllReviews.css';

export default class AllProducts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: []
        };

        this.deleteReview = this.deleteReview.bind(this);
    }

    shouldDisplayReviews = () => {
        if (sessionStorage.getItem('userId')) {
            return <div>
                <div className="sellProductBtn" >
                    <Link id="link" to="review/create">Write a review</Link>
                </div>
                <div className="reviews">
                    {this.state.reviews.map((r, i) => <Review key={r._id} index={i} {...r}  deleteReview={this.deleteReview} />)}
                </div>
            </div>
        } else {
            return <div className="reviewsInfo">
                <Link className="reviewsLinks" to="/login">Login</Link>or
                <Link className="reviewsLinks" to="/register">Register</Link>
                so you can write and see reviews!
            </div>;
        }
    }

    deleteReview(id) {
        var index = this.state.reviews.map(function (r) {
            return r._id;
        }).indexOf(id);

        let endpoint = 'reviews/' + id;

        requester.remove('appdata', endpoint, 'master')
            .then(res => {
                this.setState(prevState => {
                    prevState.reviews = prevState.reviews.filter((obj, ix) => ix !== index)
                });

                this.props.history.push('/reviews');
            })
    }

    getReviews = () => {
        requester.get('appdata', 'reviews', 'master')
            .then(res => {
                this.setState({ reviews: res })
            });
    }

    componentWillMount = () => {
        this.getReviews();
        this.shouldDisplayReviews();
    }

    componentDidMount = () => {
        this.getReviews();
        this.shouldDisplayReviews();
    }

    render() {
        return (
            <div>
                {this.shouldDisplayReviews()}
            </div>
        )
    }
}