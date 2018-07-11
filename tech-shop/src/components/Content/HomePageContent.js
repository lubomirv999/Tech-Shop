import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AllProducts from './Product/AllProducts/AllProducts';

import './HomePageContent.css';

export default class HomePageContent extends Component {
    shouldDisplayCreateProductBtn = () => {
        if (sessionStorage.getItem('userId')) {
            return true;
        } else {
            return false;
        }
    }

    componentWillMount(){
        this.shouldDisplayCreateProductBtn();
    }

    componentDidMount(){
        this.shouldDisplayCreateProductBtn();
    }

    render() {
        return (
            <div>
                {
                    this.shouldDisplayCreateProductBtn()
                        ? <div className="sellProductBtn" >
                            <Link id="link" to="product/create">Sell your product</Link>
                        </div>
                        : null
                }
                <AllProducts />
            </div>
        )
    }
}
