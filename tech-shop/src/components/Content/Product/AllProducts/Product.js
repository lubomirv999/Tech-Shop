import React, { Component } from 'react';

export default class Product extends Component {
    render() {
        return (
            <div className="products">
                <div className="singleProduct">
                    <a href="" ><img className="productImg" src="http://www.ioncomputers.bg/userfiles/productimages/product_45262.jpg" alt="" /></a>
                    <div>
                        <div>
                            <a className="productTitle" href="">{this.props.title}</a>
                            <span className="productPrice">${this.props.price}</span>
                            <h6 className="productDescription">{this.props.description}</h6>
                            <button className="buyBtn" href="">Buy</button>
                            <button className="detailsBtn" href="">Details</button>
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}