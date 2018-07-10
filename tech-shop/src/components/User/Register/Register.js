import React, { Component } from 'react';

import requester from '../../../api/utilities/requester';
import observer from '../../../api/utilities/observer';

import './Register.css';
import logo from './images/img-01.png';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css'

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                password: '',
                email: '',
                imageUrl: '',
                firstName: '',
                lastName: ''
            },
            errorMessage: '',
            isValid: false
        };
    }

    onChangeHandler = ev => {
        let fieldName = ev.target.name;
        let fieldValue = ev.target.value;

        let user = Object.assign({}, this.state.user);
        user[fieldName] = fieldValue;

        this.setState({ user });
        this.setState({
            [fieldName]: fieldValue
        })

        if (this.state.user.username !== '' && this.state.user.username.length < 4) {
            this.setState({
                errorMessage: 'Username should be atleast 4 symbols!',
                isValid: false
            })
        } else if (this.state.user.password !== '' && this.state.user.password.length < 7) {
            this.setState({
                errorMessage: 'Password should be atleast 7 symbols!',
                isValid: false
            })
        } else if (this.state.user.email !== '' && this.state.user.email.length < 5) {
            this.setState({
                errorMessage: 'Email should be atleast 5 symbols!',
                isValid: false
            })
        } else if (this.state.user.imageUrl !== '' && this.state.user.imageUrl.length < 10) {
            this.setState({
                errorMessage: 'Image Url should be atleast 10 symbols!',
                isValid: false
            })
        } else if (this.state.user.firstName !== '' && this.state.user.firstName.length < 4) {
            this.setState({
                errorMessage: 'First name should be atleast 4 symbols!',
                isValid: false
            })
        } else if (this.state.user.lastName !== '' && this.state.user.lastName.length < 4) {
            this.setState({
                errorMessage: 'Last name should be atleast 4 symbols!',
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
            requester.post('user', '', 'basic', this.state.user)
                .then(res => {                    
                    observer.trigger(observer.events.loginUser, res.username);
                    sessionStorage.setItem('authtoken', res._kmd.authtoken);
                    sessionStorage.setItem('globalUser', res.username);
                    sessionStorage.setItem('userId', res._id);

                    let endpoint = res._id + '/roles/ea0fcfa5-b241-46e5-8ed0-43e4dc4bb37e';
                    requester.update('user', endpoint, 'master');

                    this.props.history.push('/success');
                })
                .catch(res => {
                    this.setState({
                        user: {
                            username: '',
                            password: '',
                            email: '',
                            imageUrl: '',
                            firstName: '',
                            lastName: ''
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
                            <img className="registerLogo" src={logo} alt="IMG" />
                        </div>

                        <form className="login100-form validate-form" onSubmit={this.onSubmitHandler}>
                            <span className="login100-form-title">Register</span>

                            <div className="wrap-input100">
                                <input
                                    className="input100"
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    required
                                    onChange={this.onChangeHandler} />

                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input100">
                                <input
                                    className="input100"
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    required
                                    onChange={this.onChangeHandler} />

                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-address-card" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input100">
                                <input
                                    className="input100"
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    required
                                    onChange={this.onChangeHandler} />

                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-address-card" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input100">
                                <input
                                    className="input100"
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    onChange={this.onChangeHandler} />

                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input100">
                                <input
                                    className="input100"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                    onChange={this.onChangeHandler} />

                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
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
                                <button className="login100-form-btn" type="submit">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}