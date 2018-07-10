import React, { Component } from 'react';

import requester from '../../../../api/utilities/requester';
import observer from '../../../../api/utilities/observer';

import editReview from './images/editReview.png';

export default class ReviewEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            review: {
                title: '',
                content: '',
                imageUrl: '',
                authorId: sessionStorage.getItem('userId')
            },
            errorMessage: '',
            isValid: false
        };
    }

    onChangeHandler = ev => {
        let fieldName = ev.target.name;
        let fieldValue = ev.target.value;

        let review = Object.assign({}, this.state.review);
        review[fieldName] = fieldValue;

        this.setState({ review });
        this.setState({
            [fieldName]: fieldValue
        })

        if (this.state.review.title !== '' && this.state.review.title.length < 4) {
            this.setState({
                errorMessage: 'Title should be atleast 4 symbols!',
                isValid: false
            })
        } else if (this.state.review.content !== '' && this.state.review.content.length < 190
            && this.state.review.content.length > 200) {
            this.setState({
                errorMessage: 'Description should be atleast 190 symbols and less than 200 symbols!',
                isValid: false
            })
        } else if (this.state.review.imageUrl !== '' && this.state.review.imageUrl.length < 10) {
            this.setState({
                errorMessage: 'Image Url should be atleast 10 symbols!',
                isValid: false
            })
        } else {
            this.setState({
                errorMessage: null,
                isValid: true
            })
        }
    }

    onSubmitHandler = ev => {
        ev.preventDefault();

        let endpoint = 'reviews/' + this.props.match.params.id;

        this.state.isValid ?
            requester.update('appdata', endpoint, 'master', this.state.review)
                .then(res => {
                    observer.trigger(observer.events.createReview, res.review);
                    this.props.history.push('/success');
                })
                .catch(res => {
                    this.setState({
                        review: {
                            title: '',
                            content: '',
                            imageUrl: '',
                            authorId: sessionStorage.getItem('userId')
                        }
                    });
                    this.setState({
                        errorMessage: res.error.description
                    })
                })
            :
            this.setState({
                errorMessage: 'Invalid credentials!'
            })
    }

    render() {
        return (
            <div className="limiter">
                {this.state.errorMessage ?
                    <div className="err">
                        {this.state.errorMessage}
                    </div>
                    : null
                }

                <div className="container-login100-register">
                    <div className="wrap-login100">
                        <div className="login100-pic js-tilt" data-tilt>
                            <img className="registerLogo" src={editReview} alt="IMG" />
                        </div>

                        <form className="login100-form validate-form" onSubmit={this.onSubmitHandler}>
                            <span className="login100-form-title">Edit your review</span>

                            <div className="wrap-input100">
                                <input
                                    className="input100"
                                    type="text"
                                    name="title"
                                    placeholder="Title"
                                    required
                                    onChange={this.onChangeHandler} />

                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-product-hunt" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input100">
                                <input
                                    className="input100"
                                    type="text"
                                    name="content"
                                    placeholder="Content"
                                    required
                                    onChange={this.onChangeHandler} />

                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-file-text" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input100">
                                <input
                                    className="input100"
                                    type="text"
                                    name="imageUrl"
                                    placeholder="Image Url"
                                    required
                                    onChange={this.onChangeHandler} />

                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-address-book" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn" type="submit">Edit Review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}