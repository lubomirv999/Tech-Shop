import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Review extends Component {
    render() {
        return (
            <div className="singleReview">
                <a href="" ><img className="reviewImg" src={this.props.imageUrl} alt="Review" /></a>
                <div>
                    <div>
                        <a className="reviewTitle" href="">{this.props.title}</a>
                        <h6 className="reviewContent">{this.props.content}</h6>
                        {
                            (this.props.authorId === sessionStorage.getItem('userId'))
                                ?
                                <div>
                                    <Link className="editBtn" to={"/review/edit/" + this.props._id}>Edit</Link>
                                    <button className="deleteBtn" onClick={() => this.props.deleteReview(this.props._id)}>Delete</button>
                                </div>
                                : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}