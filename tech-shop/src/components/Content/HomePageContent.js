import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AllProducts from './Product/AllProducts/AllProducts';

import './HomePageContent.css';

export default class HomePageContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: this.props.currentUserId,
            shouldCreateProduct: false
        }
    }

    getUserId = () => {
        if (sessionStorage.getItem('userId')) {
            this.setState({
                shouldCreateProduct: true
            });
        } else {
            this.setState({
                shouldCreateProduct: false
            })
        }
    }

    componentWillMount() {
        this.getUserId();
    }

    componentWillUpdate() {
        this.getUserId();
    }

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
