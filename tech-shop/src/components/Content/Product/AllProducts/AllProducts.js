import React, { Component } from 'react';

import requester from '../../../../api/utilities/requester';

import Product from './Product';

import './AllProducts.css';

export default class AllProducts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    componentWillMount = () => {
        this.getProducts();
    }

    getProducts = () => {
        requester.get('appdata', 'products', 'master')
            .then(res => {
                this.setState({ products: res })
            });
    }

    componentDidMount = () => {
        this.getProducts();
    }

    render() {
        return (
            <div className="products">
                {this.state.products.map((p, i) => <Product key={p._id} index={i} {...p} />)}
            </div>
        )
    }
}