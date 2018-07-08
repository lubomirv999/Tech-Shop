import React, { Component } from 'react';

import requester from '../../../../api/utilities/requester';
import observer from '../../../../api/utilities/observer';

import './ProductCreate.css';
import createProduct from './images/createProduct.png';

export default class ProductCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: {
                title: '',
                price: '',
                description: '',
                imageUrl: '',
                authorId: sessionStorage.getItem('userId')
            },
            errorMessage: '',
            isValid: false
        };
    }

    onChangeHandler = ev => {
        let fieldName = ev.target.name;
        let fieldValue = ev.target.value;

        let product = Object.assign({}, this.state.product);
        product[fieldName] = fieldValue;

        this.setState({ product });
        this.setState({
            [fieldName]: fieldValue
        })

        if (this.state.product.title !== '' && this.state.product.title.length < 4) {
            this.setState({
                errorMessage: 'Title should be atleast 4 symbols!',
                isValid: false
            })
        } else if (this.state.product.price !== '' && this.state.product.price.length < 1) {
            this.setState({
                errorMessage: 'Price should be atleast 1 symbols!',
                isValid: false
            })
        } else if (this.state.product.description !== '' && this.state.product.description.length < 190
            && this.state.product.description.length > 200) {
            this.setState({
                errorMessage: 'Description should be atleast 190 symbols and less than 200 symbols!',
                isValid: false
            })
        } else if (this.state.product.imageUrl !== '' && this.state.product.imageUrl.length < 10) {
            this.setState({
                errorMessage: 'Image Url should be atleast 10 symbols!',
                isValid: false
            })
        } else {
            this.setState({
                errorMessage: null,
                isValid: true
            })
        }
    }

    onSubmitHandler = ev => {
        ev.preventDefault();

        this.state.isValid ?
            requester.post('appdata', 'products', 'master', this.state.product)
                .then(res => {
                    observer.trigger(observer.events.createProduct, res.product);
                    this.props.history.push('/');
                })
                .catch(res => {
                    this.setState({
                        product: {
                            title: '',
                            price: '',
                            description: '',
                            imageUrl: '',
                            authorId: ''
                        }
                    });
                    this.setState({
                        errorMessage: res.error.description
                    })
                })
            :
            this.setState({
                errorMessage: 'Invalid credentials!'
            })
    }

    render() {
        return (
            <div className="limiter">
                {this.state.errorMessage ?
                    <div className="err">
                        {this.state.errorMessage}
                    </div>
                    : null
                }

                <div className="container-login100-register">
                    <div className="wrap-login100">
                        <div className="login100-pic js-tilt" data-tilt>
                            <img className="registerLogo" src={createProduct} alt="IMG" />
                        </div>

                        <form className="login100-form validate-form" onSubmit={this.onSubmitHandler}>
                            <span className="login100-form-title">Create Product</span>

                            <div className="wrap-input100">
                                <input
                                    className="input100"
                                    type="text"
                                    name="title"
                                    placeholder="Title"
                                    required
                                    onChange={this.onChangeHandler} />

                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-product-hunt" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input100">
                                <input
                                    className="input100"
                                    type="number"
                                    name="price"
                                    placeholder="Price"
                                    required
                                    onChange={this.onChangeHandler} />

                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-money" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input100">
                                <input
                                    className="input100"
                                    type="text"
                                    name="description"
                                    placeholder="Description"
                                    required
                                    onChange={this.onChangeHandler} />

                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-file-text" aria-hidden="true"></i>
                                </span>
                            </div>                            

                            <div className="wrap-input100">
                                <input
                                    className="input100"
                                    type="text"
                                    name="imageUrl"
                                    placeholder="Image Url"
                                    required
                                    onChange={this.onChangeHandler} />

                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-address-book" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn" type="submit">Create Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}