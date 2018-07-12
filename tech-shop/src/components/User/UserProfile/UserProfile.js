import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import requester from '../../../api/utilities/requester';

import './UserProfile.css';

export default class UserProfile extends Component {
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
            }
        };
    }

    getUser = () => {
        requester.get('user', sessionStorage.getItem('userId'), 'master')
            .then(res => {
                this.setState({
                    user: res
                })
            })
    }

    componentWillMount() {
        this.getUser();
    }

    render = () => {
        return (
            <div className="userProfile">
                <p className="userInfo">Welcome to your profile: {this.state.user.username}</p>
                <p className="userInfo">Your email: {this.state.user.email}</p>
                <p className="userInfo">Firstname: {this.state.user.firstName}</p>
                <p className="userInfo">Lastname: {this.state.user.lastName}</p>
                <img className="userProfilePicture" src={this.state.user.imageUrl} alt="User Profile" />
                <div className="userProfileBtns">
                    <Link className="userProfileEditBtn" to={'edit/' + sessionStorage.getItem('userId')}>Edit</Link>
                </div>
            </div>
        )
    }
}