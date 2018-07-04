import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import observer from '../../api/utilities/observer';

import './Navigation.css';
import logo from './images/navigation-logo.png';

export default class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        }

        observer.subscribe(observer.events.loginUser, this.userLoggedIn);
    }

    userLoggedIn = username =>
        this.setState({ username });

    isAdmin = () => {
        if (this.state.username === 'Admin') {
            return true;
        } else {
            return false;
        }
    }

    render() {
        const loggedInSection = (
            <div className="profile">
                <li><NavLink to="/orders" activeClassName="activeNav">My Orders</NavLink></li>
                <li><NavLink to="/reviews" activeClassName="activeNav">Reviews</NavLink></li>
                {this.isAdmin() ? <li><NavLink to="/users" activeClassName="activeNav">Users</NavLink></li> : null}
                <span id="username-container">Hello, <span id="username">{this.state.username}</span>!</span>
                <li><NavLink to="/logout" id="linkMenuLogout">Logout</NavLink></li>
            </div>);

        return (
            <header>
                <div className="navigation-menu">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                        <h1>Tech Shop</h1>
                    </div>

                    <nav>
                        <ul>
                            <li><NavLink to="/" activeClassName="activeNav">Home</NavLink></li>
                            {this.state.username ? loggedInSection :
                                <div className="auth">
                                    <li><NavLink to="/login" activeClassName="activeNav">Login</NavLink></li>
                                    <li><NavLink to="/register" activeClassName="activeNav">Register</NavLink></li>
                                </div>
                            }
                        </ul>
                    </nav>
                </div>

                <h2>Welcome to Tech Shop</h2>
                <h3>Tech Shop is the best place to buy electronics for you and your family!</h3>
            </header>
        )
    }
}