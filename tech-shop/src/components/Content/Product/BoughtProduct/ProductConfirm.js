import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Product extends Component {
    render() {
        return (
            <div className="notFound">
                <div className='c'>
                    <div className='_1'>Are you sure you want to buy this product?</div>
                    <p className="confirmBtns">
                        <Link className="confirmBuyBtn" to="/product/buy">Buy</Link>
                        <Link className="backToHomeBtn" to="/">Back to Home</Link>
                    </p>
                </div>
            </div>
        )
    }
}