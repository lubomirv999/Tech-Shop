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

        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(id) {
        var index = this.state.products.map(function (p) {
            return p._id;
        }).indexOf(id);

        let endpoint = 'products/' + id;

        requester.remove('appdata', endpoint, 'master')
            .then(res => {
                this.setState(prevState => {
                    prevState.products = prevState.products.filter((obj, ix) => ix !== index)
                });

                this.props.history.push('/');
            })
    }

    getProducts = () => {
        requester.get('appdata', 'products', 'master')
            .then(res => {
                this.setState({ products: res })
            });
    }

    componentWillUpdate = () => {
        this.getProducts();
    }

    componentDidMount = () => {
        this.getProducts();
    }

    render() {
        return (
            <div className="products">
                {this.state.products.map((p, i) => <Product key={p._id} index={i} {...p} deleteProduct={this.deleteProduct} />)}
            </div>
        )
    }
}