import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AllProducts from './Product/AllProducts/AllProducts';

import './HomePageContent.css';

export default class HomePageContent extends Component {
    render() {
        return (
            <div>
                <div className="sellProductBtn" >
                    <Link id="link" to="product/create">Sell your product</Link>
                </div>
                <AllProducts />
            </div>
        )
    }
}
