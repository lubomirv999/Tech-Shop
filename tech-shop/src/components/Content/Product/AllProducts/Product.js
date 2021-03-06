import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Product extends Component {
    shouldDisplayBuyBtn = () => {
        if (sessionStorage.getItem('userId')) {
            return true;
        } else {
            return false;
        }
    }

    componentDidMount() {
        this.shouldDisplayBuyBtn();
    }

    componentWillMount() {
        this.shouldDisplayBuyBtn();
    }

    componentWillUpdate() {
        this.shouldDisplayBuyBtn();
    }

    render() {
        return (
            <div className="singleProduct">
                <img className="productImg" src={this.props.imageUrl} alt="Product" />
                <div>
                    <div>
                        <span className="productTitle" href="">{this.props.title}</span>
                        <span className="productPrice">${this.props.price}</span>
                        <h6 className="productDescription">{this.props.description}</h6>
                        {
                            this.shouldDisplayBuyBtn()
                                ? <Link className="buyBtn" to="/product/confirm">Buy</Link>
                                : null
                        }
                        {
                            (this.props.authorId === sessionStorage.getItem('userId') || sessionStorage.getItem('userId') === '5b4753194eeb2f4ee5e240f5')
                                ?
                                <div>
                                    <Link className="editBtn" to={'/product/edit/' + this.props._id}>Edit</Link>
                                    <button className="deleteBtn" onClick={() => this.props.deleteProduct(this.props._id)} >Delete</button>
                                </div>
                                : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}