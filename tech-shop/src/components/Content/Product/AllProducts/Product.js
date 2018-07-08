import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Product extends Component {
    render() {
        return (
            <div className="singleProduct">
                <a href="" ><img className="productImg" src={this.props.imageUrl} alt="Product" /></a>
                <div>
                    <div>
                        <a className="productTitle" href="">{this.props.title}</a>
                        <span className="productPrice">${this.props.price}</span>
                        <h6 className="productDescription">{this.props.description}</h6>
                        <Link className="buyBtn" to="/product/buy">Buy</Link>
                        {
                            (this.props.authorId === sessionStorage.getItem('userId'))
                                ?
                                <div>
                                    <Link className="editBtn" to={"/product/edit/" + this.props._id}>Edit</Link>
                                    <Link className="deleteBtn" to={"/product/delete/" + this.props._id}>Delete</Link>
                                </div>
                                : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}