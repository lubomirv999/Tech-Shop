import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import requester from '../../../api/utilities/requester';
import observer from '../../../api/utilities/observer';

export default class Logout extends Component {
    logout = () => {
        requester.post('user', '_logout', 'kinvey')
            .then(res => {
                observer.trigger(observer.events.logoutUser)
            });
    }

    render = () => {
        this.logout();
        return <Redirect to='/' />
    }
}